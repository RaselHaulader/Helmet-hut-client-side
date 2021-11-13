import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const BannerItem = ({banner}) => {
    const bannerImg = {
        backgroundImage: `url(${banner})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '70vh'
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }} style={bannerImg}>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                <Box sx={{ color: 'white', textAlign: 'center' }}>
                    <Typography variant='p' sx={{ textTransform: 'uppercase', fontSize: { xs: 10, md: 20 } }}>Safety is the first priority</Typography>
                    <Typography variant='h2' sx={{ fontWeight: 'bolder', fontSize: { xs: 18, md: 52 } }}>SAFETY IS THE FIRST</Typography>
                    <Typography variant='h6' sx={{ fontSize: { xs: 10, md: 15 } }}>Helmets create an additional layer for  the head and thus <br /> protect the wearer from  some of the more <br /> severe forms  of traumatic brain injury</Typography>
                    <Button color="inherit" variant='outlined'>Learn more</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default BannerItem;