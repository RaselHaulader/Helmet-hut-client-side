import { Box } from '@mui/system';
import React from 'react';
import { Button, Rating, Typography } from '@mui/material';


const SingleOrder = (props) => {
    const { img, name, price, status, _id, count, date } = props.order

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
                alignItems: 'center',
                gridTemplateColumns: { md: '1fr 3fr 3fr 3fr 2fr', sm: 'repeat(1fr, 1fr)' },
                borderBottom: "1px solid rgba(191, 190, 190, 0.478)"
            }}
        >
            <Item >
                <Box sx={{ bgcolor: '#f4f4f4', p: 1 }}> <img width="100%" src={img} alt="" /></Box>
            </Item>
            <Item >
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        sx={{ fontWeight: 'bold', color: 'black' }}
                        variant="p">
                        {name} <br />
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 'bold', color: 'gray' }}
                        variant="caption">
                        {date}
                    </Typography>

                </Box>
            </Item>
            <Item
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: { md: 'center' }
                }}>
                {count + ' x ' + price + ' = ' + price * count} $
            </Item>
            <Item
                sx={{
                    color: 'dodgerBlue',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
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