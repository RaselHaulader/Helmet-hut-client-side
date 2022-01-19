import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useCart from '../../../hooks/useCart';
import PaymentElement from './PaymentElement';
import SingleItem from './SingleItem';

const Payment = () => {
    const {items} = useCart()
    return (
        <div>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    md: 'repeat(2, 1fr)',
                    sm: 'repeat(1, 1fr)'
                },
                gridGap:'10px',
            }}>
                <Box className='itemContainer'>
                    {
                        items.map(item => <SingleItem item={item}></SingleItem>)
                    }
                </Box>
                <Box className="paymentContainer">
                    <PaymentElement></PaymentElement>
                </Box>
            </Box>
        </div>
    );
};

export default Payment;