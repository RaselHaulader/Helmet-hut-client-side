import React, { useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import Loader from "react-js-loader";
import { TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const PaymentCheckOut = ({ info }) => {
    const { price } = info
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const { user } = useAuth()
    useEffect(() => {
        fetch('https://powerful-mountain-89009.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price, name: 'rasel', email: 'hauladerrasel2@gmail.com' })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
            .catch(err => console.log(err.message))
    }, []);
    const inputStyle = {
        width: '100%',
        margin: '8px 0',
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            setError(error.message);
            setSuccess('');
            setProcessing(false);
        }
        else {
            setError('');
            console.log(paymentMethod);
            setProcessing(false);
        }
        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'rasel',
                        email: 'abc@def.com'
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
            setSuccess('');
            setProcessing(false);
        }
        else {
            setError('');
            setSuccess('Your payment processed successfully.')
            console.log(paymentIntent);
            setProcessing(false);
            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            console.log(payment);
            // const url = `http://localhost:5000/appointments/${_id}`;
            // fetch(url, {
            //     method: 'PUT',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(payment)
            // })
            //     .then(res => res.json())
            //     .then(data => console.log(data));
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <TextField
                    id="standard-basic"
                    variant="standard"
                    defaultValue={user.displayName}
                    label="Name"
                    style={inputStyle} />
                <TextField
                    id="standard-basic"
                    variant="standard"
                    defaultValue={user.email}
                    label="Email"
                    style={inputStyle} />
                <TextField
                    id="standard-basic"
                    variant="standard"
                    label="Phone"
                    style={inputStyle} />
                <TextField
                    id="standard-basic"
                    variant="standard"
                    label="Address"
                    style={inputStyle} />
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#d11010',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ? <Loader type="spinner-cub" bgColor={"tomato"} size={50} /> : <button className='payBtn' type="submit" disabled={!stripe || success}>
                    Pay ${price}
                </button>}
            </form>
            {
                error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
            }
            {
                success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>
            }
        </div>
    );
};

export default PaymentCheckOut;