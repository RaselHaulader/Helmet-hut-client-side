import { Box } from '@mui/system';
import React from 'react';
import { Button, Rating, Typography } from '@mui/material';
import Loader from "react-js-loader";


const SingleManageProduct = (props) => {
    const { img, title, name, _id, details, price, status, rating } = props.product
    const handleUpdateProduct = props.handleUpdateProduct
    const load2 = props.load2
    function Item(props) {
        const { sx, ...other } = props;
        return (
            <Box
                sx={{
                    p: 1,
                    borderRadius: 1,
                    textAlign: 'left',
                    fontSize: '1rem',
                    fontWeight: '700',
                    ...sx,
                }}
                {...other}
            />
        );
    }
    return (
        <Box
            sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 1,
                gridTemplateColumns: { md: '2fr 3fr 5fr 2fr 2fr 2fr', sm: 'repeat(1fr, 1fr)' },
                borderBottom: "1px solid #f4f4f4"
            }}
        >
            <Item >
                <Box sx={{ bgcolor: '#f4f4f4', p: 1 }}> <img width="100%" src={img} alt="" /></Box>
            </Item>
            <Item >
                <Box >
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="caption">{title}</Typography> <br />
                    <Rating size="small" name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                </Box>
            </Item>
            <Item>
                <Typography paragraph>{details}</Typography>
            </Item>
            <Item sx={{ alignItems: 'center', display: 'flex', textAlign: { md: 'center' } }}>
                ${price}
            </Item>
            <Item sx={{ alignItems: 'center', display: 'flex', textAlign: { md: 'center' } }}>
                {status}
            </Item>
            <Item sx={{ alignItems: 'center', display: 'flex', textAlign: { md: 'center' } }}>
               <Button onClick={()=>handleUpdateProduct(_id)}>{load2.load && load2.id===_id ? <Loader type="spinner-cub" bgColor={"tomato"}  size={20} />: "Delete"}</Button>
            </Item>
        </Box>

    );
};

export default SingleManageProduct;