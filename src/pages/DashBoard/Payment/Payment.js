import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useCart from '../../../hooks/useCart';
import PaymentElement from './PaymentElement';
import SingleItem from './SingleItem';

const Payment = () => {
    const { items } = useCart()
    return (
        <div>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    md: 'repeat(2, 1fr)',
                    sm: 'repeat(1, 1fr)'
                },
                gridGap: '10px',
            }}>
                <Box className='itemContainer'>
                    {
                        items.map(item => <SingleItem item={item}></SingleItem>)
                    }

                    {items.length === 0 ? <Typography sx={{ textAlign: 'center', color: 'tomato' }}>
                        Your Cart is Empty
                    </Typography> :
                        <Box sx={{ display:'flex',margin:'10px 0', justifyContent:'space-evenly', color: 'tomato' }}>
                    <span>
                        Total Item : {items.reduce((prev, curr) => {
                            return curr.count + prev
                        }, 0)}
                    </span>
                    <span>
                        Total Price : {items.reduce((prev, curr) => {
                            return curr.price * curr.count + prev
                        }, 0)} tk
                    </span>
                </Box>}
            </Box>
            <Box className="paymentContainer">
                <PaymentElement></PaymentElement>
            </Box>
        </Box>
        </div >
    );
};

export default Payment;