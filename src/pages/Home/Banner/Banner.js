import { Container, Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import React from 'react';
import banner from '../../../images/banner3.jpg'
const Banner = () => {
   
    const bannerImg = {
        backgroundImage: `url(${banner})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'70vh'
    }

    return (
        <div style={bannerImg}>
            <Container sx={{display:'flex', justifyContent:'center', pt:10}}>
               <Box sx={{color:'white', textAlign:'center'}}>
                   <Typography variant='p'sx={{textTransform:'uppercase'}}>Safety is the first priority</Typography>
                   <Typography variant='h2' sx={{fontSize: {xs:12, md:52}}}>SAFETY IS THE FIRST</Typography>
                   <Typography variant='p'sx={{textTransform:''}}>Safety is the first priority</Typography>
               </Box>
            </Container>
        </div>
    );
};

export default Banner;