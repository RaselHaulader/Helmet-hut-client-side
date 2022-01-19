import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentCheckOut from './PaymentCheckOut';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';
const stripePromise = loadStripe('pk_test_51JwhTVFt9uWPMDFcfb8kB4883BWHn6H2hBW2tDzxGZbL4XAOdeB9MpdPU6wYzMBWBUADubG59CrqtUiUNoT1aWRV00IqTGeWjJ');

const PaymentElement = () => {
    const { items } = useCart()
    const {user} = useAuth()
    const info = {
        name: user.displayName,
        price: items.reduce((prev, curr) => {
            return curr.price * curr.count + prev
        }, 0)
    }
   
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentCheckOut info={info} />
            </Elements>
        </div>
    );
};

export default PaymentElement;