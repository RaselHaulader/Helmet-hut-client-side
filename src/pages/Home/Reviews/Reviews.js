import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('https://powerful-mountain-89009.herokuapp.com/allReviews')
            .then(res => setReviews(res.data))
    }, [])
    return (
        <Container sx={{ mt: 4 }}>
            <Box >
                <Typography variant="h4" sx={{ mt: 15, textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' }}>users <Box sx={{ color: 'tomato', display: 'inline' }}> reviews</Box></Typography>
                <Box sx={{ textAlign: 'center', color: 'orange' }}><span>Users opinions</span></Box>
                <Box container sx={{ p: 4,pt:6, display: 'grid', gridTemplateColumns: { xm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)' } }}>
                    {
                        reviews.map(review => <Review review={review}></Review>)
                    }
                </Box>
            </Box>
        </Container>
    );
};

export default Reviews;