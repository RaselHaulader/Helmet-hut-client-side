import { Box } from '@mui/system';
import React from 'react';
import { Button, Rating, Typography } from '@mui/material';


const SingleOrder = (props) => {
    const { img, title, name, details, price, status, rating, _id, } = props.order

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
                    <Typography
                        sx={{ fontWeight: 'bold', color: 'gray' }}
                        variant="h6">
                        {name}
                    </Typography>
                    <Typography
                        sx={{ color: 'gray' }}
                        variant="caption">
                        {title}
                    </Typography> <br />
                    <Rating
                        size="small"
                        name="half-rating-read"
                        defaultValue={rating}
                        precision={0.5}
                        readOnly />
                </Box>
            </Item>
            <Item>
                <Typography
                    sx={{ color: 'gray' }}
                    paragraph>
                    {details}
                </Typography>
            </Item>
            <Item
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    textAlign: { md: 'center' }
                }}>
                ${price}
            </Item>
            <Item
                sx={{
                    color: 'dodgerBlue',
                    alignItems: 'center',
                    display: 'flex',
                    textAlign: { md: 'center' }
                }}>
                {status}
            </Item>
            <Item
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    textAlign: { md: 'center' }
                }}>
                <Button
                    sx={{ bgcolor: '#fd3b3b4f' }}
                    color='error'
                    onClick={() => props.handleCancel(_id)}>
                    Cancel
                </Button>
            </Item>
        </Box>

    );
};

export default SingleOrder;