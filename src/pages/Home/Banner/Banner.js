import { Button, Container, Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import React from 'react';
import banner from '../../../images/banner.jpg'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.png'
import banner4 from '../../../images/banner4.jpg'
import BannerItem from './BannerItem';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'



import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Banner = () => {


    return (
        <Swiper speed={1500} spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false,

        }} pagination={{
            "clickable": true
        }} navigation={true} className="mySwiper">
            <SwiperSlide>
                <BannerItem banner={banner} ></BannerItem>
            </SwiperSlide>
            <SwiperSlide>
                <BannerItem banner={banner2} ></BannerItem>
            </SwiperSlide>
            <SwiperSlide>
                <BannerItem banner={banner3} ></BannerItem>
            </SwiperSlide>
            <SwiperSlide>
                <BannerItem banner={banner4} ></BannerItem>
            </SwiperSlide>
        </Swiper>

    );
};

export default Banner;