import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Product from './Product';

const Products = () => {
    return (
        <Container>
            <Box sx={{ pt:10, px:{sm:'0px', md:'20px', lg:"50px"}}}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>Choose one for yoy</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns:{md: 'repeat(3, 1fr)', sm:'repeat(1, 1fr)'} }}>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </Box>
            </Box>
        </Container>
    );
};

export default Products;