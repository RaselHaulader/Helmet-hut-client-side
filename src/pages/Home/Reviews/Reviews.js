import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Review from './Review';
import './swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/effect-coverflow/effect-coverflow.scss';



import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);



const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('https://powerful-mountain-89009.herokuapp.com/allReviews')
            .then(res => setReviews(res.data))
    }, [])
    return (
        <>
            <Typography variant="h4" sx={{ mt: 15, textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' }}>users <Box sx={{ color: 'tomato', display: 'inline' }}> reviews</Box></Typography>
            <Box sx={{ textAlign: 'center', color: 'orange',mb:5 }}><span>Users opinions</span></Box>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": false
            }} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false,

            }} pagination={true} className="swiper2">

                {
                    reviews.map(review => <SwiperSlide className="swiper-slide2"> <Review key={review._id} review={review}></Review></SwiperSlide>)
                }
            </Swiper>
        </>


    );
};

export default Reviews;




/*

<Item className={classes.shadow}>
            <Box sx={{py:5}}>
                <Box >
                    <img style={{borderRadius:'50%'}} width="30%" height="30%" src={img} alt="" />
                </Box>
                <Box>
                    <h3>{name}</h3>
                    <Typography sx={{color:'gray', my:3}}>{details}</Typography>
                    <Rating size="small" name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                </Box>
            </Box>
        </Item>




         <Container sx={{ mt: 4 }}>
            <Box >
                <Typography variant="h4" sx={{ mt: 15, textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' }}>users <Box sx={{ color: 'tomato', display: 'inline' }}> reviews</Box></Typography>
                <Box sx={{ textAlign: 'center', color: 'orange' }}><span>Users opinions</span></Box>
                <Box container sx={{ p: 4,pt:6, display: 'grid', gridTemplateColumns: { xm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)' } }}>
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </Box>
            </Box>
        </Container>


*/