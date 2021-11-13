import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'black', color: 'white' }}>

            <Container>
                <Box sx={{ py: 5, display: 'grid', gridTemplateColumns: {md:'2fr 3fr 2fr 4fr',sm:"repeat(1fr, 1fr)",xs:"repeat(1fr, 1fr)"} }}>
                    <Box>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                            HELMET <Box sx={{ color: 'tomato', display: 'inline' }}> HUT</Box>
                        </Typography>


                    </Box>
                    <Box>
                        <Typography variant="h5">About Us</Typography>
                        <Typography variant='caption' sx={{ color: 'rgb(204, 204, 204)' }}>
                            We are providing best quality helmet. <br /> We are concern about riders safety.<br /> We are giving higher priority about safety.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5">Menu</Typography>
                        <Typography variant='p' sx={{ color: 'rgb(204, 204, 204)' }}>Home</Typography><br/>
                        <Typography variant='p' sx={{ color: 'rgb(204, 204, 204)' }}>Explore</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5">Get In Touch</Typography>
                          <Typography variant='p' sx={{ color: 'rgb(204, 204, 204)' }}>Email: contact@gmail.com</Typography><br/>
                          <Typography variant='p' sx={{ color: 'rgb(204, 204, 204)' }}>Phone: 019 983 3734</Typography><br/>
                          <Typography variant='p' sx={{ color: 'rgb(204, 204, 204)' }}>Office: helmet hut, 300Rd</Typography><br/>
                          
                    </Box>
                </Box>
            </Container>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}> <Typography variant="caption">All Rights Reserved By Helmet Hut 2021</Typography></Box>

        </Box>
    );
};
export default Footer;