import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
     axios.get('http://localhost:5000/allReviews')
     .then(res=>setReviews(res.data))
    },[])
    return (
        <Container sx={{mt:4}}>
            <Box >
                <Typography variant="h4" sx={{textAlign:'center'}}>Users Opinion</Typography>
                <Box container sx={{ p: 2, display: 'grid', gridTemplateColumns: {xm:'repeat(1, 1fr)',md:'repeat(3, 1fr)', lg:'repeat(3, 1fr)'} }}>
                   {
                       reviews.map(review=><Review review={review}></Review>)
                   }
                </Box>
            </Box>
        </Container>
    );
};

export default Reviews;