import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Product from '../Home/Products/Product';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <Container>
                <Box sx={{ pt: 10, px: { sm: '0px', md: '20px', lg: "50px" } }}>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>Browse All Products</Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { md: 'repeat(4, 1fr)', sm: 'repeat(1, 1fr)' } }}>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                    </Box>
                </Box>
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default Explore;