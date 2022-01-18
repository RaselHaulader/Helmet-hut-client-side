import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentCheckOut from './PaymentCheckOut';
const stripePromise = loadStripe('pk_test_51JwhTVFt9uWPMDFcfb8kB4883BWHn6H2hBW2tDzxGZbL4XAOdeB9MpdPU6wYzMBWBUADubG59CrqtUiUNoT1aWRV00IqTGeWjJ');

const PaymentElement = () => {
    const info = {
        name: 'Russel',
        price: 2000
    }
    const appearance = {
        theme: 'stripe'
      };
    return (
        <div>
            <h1>Payment system</h1>

            <Elements  stripe={stripePromise}>
                <PaymentCheckOut info={info} />
            </Elements>
        </div>
    );
};

export default PaymentElement;