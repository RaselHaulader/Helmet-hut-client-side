import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Home/Products/Product';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import axios from 'axios'

const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/allProducts')
            .then(res => setProducts(res.data))
    }, [])

    return (
        <Box>
            <Navigation></Navigation>
            <Container>
                <Box sx={{ pt: 10, px: { sm: '0px', md: '20px', lg: "50px" } }}>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>Browse All Products</Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { md: 'repeat(4, 1fr)', sm: 'repeat(1, 1fr)' } }}>
                        {
                            products.map(product => <Product product={product}></Product>)
                        }
                    </Box>
                </Box>
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default Explore;