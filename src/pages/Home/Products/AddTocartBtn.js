import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';
import useCart from '../../../hooks/useCart';
const useStyles = makeStyles({
    btn: {
        cursor: 'pointer',
        "&:hover": { background: 'tomato', color: 'white' },
        padding: '5px 10px',
        transition: '0.3s',
        border: '1px solid  rgb(229, 229, 229)',
        color: 'gray',
    },
});
const AddTocartBtn = ({ info }) => {
    const { _id, name, price, img } = info;
    const { addItem } = useCart()

    const classes = useStyles();
    return (
        <Box
            onClick={() => addItem(_id, name, price, img)}
            className={classes.btn}
            sx={{
                width: '10%',
                textAlign: 'center',
                ml: "4px",
            }}>
            <Typography
                variant="caption" >
                <i className="fas fa-cart-plus"></i>
            </Typography>

        </Box>

    );
};

export default AddTocartBtn;