import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios'

const Products = () => {
    const [products, setProducts] =useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/allProducts')
        .then(res=> setProducts(res.data))
    },[])
    return (
        <Container>
            <Box sx={{ pt:10, px:{sm:'0px', md:'20px', lg:"50px"}}}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>Choose one for yoy</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns:{md: 'repeat(3, 1fr)', sm:'repeat(1, 1fr)'} }}>
                   {
                       products.map(product=>  <Product product={product}></Product>)
                   }
                </Box>
            </Box>
        </Container>
    );
};

export default Products;