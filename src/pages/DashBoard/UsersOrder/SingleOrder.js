import { Box } from '@mui/system';
import React from 'react';
import { Rating, Typography } from '@mui/material';


const SingleOrder = () => {
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
                <Box sx={{ bgcolor: '#f4f4f4', p: 1 }}> <img width="100%" src="https://i.ibb.co/vc4884f/hl7-removebg-preview.png" alt="" /></Box>
            </Item>
            <Item >
                <Box >
                    <Typography variant="h6">Product bame</Typography>
                    <Typography variant="caption">Product bame</Typography> <br />
                    <Rating size="small" name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </Box>
            </Item>
            <Item>
                <Typography paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus accusantium ad delectus ea eius deserunt sed inventore accusamus modi.</Typography>
            </Item>
            <Item sx={{ alignItems: 'center', display: 'flex', textAlign: { md: 'center' } }}>
                $10
            </Item>
            <Item sx={{ alignItems: 'center', display: 'flex', textAlign: { md: 'center' } }}>
                Pending
            </Item>
            <Item sx={{ alignItems: 'center', display: 'flex', textAlign: { md: 'center' } }}>
                Delete
            </Item>
        </Box>

    );
};

export default SingleOrder;