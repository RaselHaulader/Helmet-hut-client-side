import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Review from './Review';

const Reviews = () => {
    return (
        <Container sx={{mt:4}}>
            <Box >
                <Typography variant="h4" sx={{textAlign:'center'}}>Users Opinion</Typography>
                <Box container sx={{ p: 2, display: 'grid', gridTemplateColumns: {xm:'repeat(1, 1fr)',md:'repeat(3, 1fr)', lg:'repeat(3, 1fr)'} }}>
                    <Review></Review>
                    <Review></Review>
                    <Review></Review>
                    <Review></Review>
                    <Review></Review>
                    <Review></Review>
                </Box>
            </Box>
        </Container>
    );
};

export default Reviews;