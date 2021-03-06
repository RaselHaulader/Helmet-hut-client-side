import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';
import Loader from "react-js-loader";

const Products = () => {
    const [products, setProducts] = useState([])
    const [ isLoading, setLoading ] = useState(true)
    useEffect(() => {
        console.log('product container');
        setLoading(true)
        axios.get('https://powerful-mountain-89009.herokuapp.com/allProducts')
            .then(res => {
                setProducts(res.data)
                setLoading(false)
            }).catch(err => {
                setLoading(false)
            })
    }, [])
    return (
        <Container>
            <Box sx={{ pt: 10, px: { sm: '0px', md: '20px', lg: "50px" } }}>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        fontWeight: 'bold'
                    }}>
                    Choose one <Box sx={{ color: 'tomato', display: 'inline' }}> for you</Box></Typography>
                <Box sx={{ textAlign: 'center', color: 'orange' }}><span>Take One</span></Box>
                {isLoading && <Box sx={{ mt: 15, textAlign: 'center' }}><Loader type="box-rectangular" bgColor={"tomato"} size={100} /></Box>}
                <Box sx={{ display: 'grid', mt: 5, gridTemplateColumns: { md: 'repeat(3, 1fr)', sm: 'repeat(1, 1fr)' } }}>

                    {
                        products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Box>
            </Box>
        </Container>
    );
};

export default Products;