import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PaymentElement from './PaymentElement';

const Payment = () => {
    return (
        <div>
           <Box>
               <PaymentElement></PaymentElement>
           </Box>
        </div>
    );
};

export default Payment;