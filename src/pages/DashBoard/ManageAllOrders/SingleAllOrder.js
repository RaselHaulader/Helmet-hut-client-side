import { Box } from '@mui/system';
import React from 'react';
import { Rating, Typography } from '@mui/material';


const SingleAllOrder = (props) => {
    const { img, title, name,email,description,address,phone, price, status,user } = props.order
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
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </Box>
            </Item>
            <Item>
                <Box >
                    <Typography variant="h6">{user}</Typography>
                    <Typography variant='p'>{email}</Typography> <br />
                    <Typography variant='p'>{phone}</Typography> <br />
                    <Typography variant='p'>{address}</Typography> <br />
                    <Typography variant="caption">{description}</Typography> <br />
                </Box>
            </Item>
            <Item sx={{ alignItems: 'center', display: 'flex', textAlign: { md: 'center' } }}>
                ${price}
            </Item>
            <Item sx={{ alignItems: 'center', display: 'flex', textAlign: { md: 'center' } }}>
                {status}
            </Item>
            <Item sx={{ alignItems: 'center', display: 'flex', textAlign: { md: 'center' } }}>
                Delete
            </Item>
        </Box>

    );
};

export default SingleAllOrder;