import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';
import Loader from "react-js-loader";
import useAuth from '../../../hooks/useAuth';

const Products = () => {
    const [products, setProducts] = useState([])
    const {isLoading, setLoading} = useAuth()
        useEffect(() => {
            setLoading(true)
            axios.get('http://localhost:5000/allProducts')
                .then(res => {
                    setProducts(res.data)
                    setLoading(false)
                })
        }, [])
    return (
        <Container>
            <Box sx={{ pt: 10, px: { sm: '0px', md: '20px', lg: "50px" } }}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>Choose one for yoy</Typography>
                {isLoading && <Box sx={{ mt: 15, textAlign: 'center' }}><Loader type="box-rectangular" bgColor={"tomato"} title={"bubble-loop"} color={'#FFFFFF'} size={100} /></Box>}
                <Box sx={{ display: 'grid', gridTemplateColumns: { md: 'repeat(3, 1fr)', sm: 'repeat(1, 1fr)' } }}>

                    {
                        products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Box>
            </Box>
        </Container>
    );
};

export default Products;