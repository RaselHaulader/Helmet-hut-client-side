import { Container, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Home/Products/Product';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import axios from 'axios'
import Loader from "react-js-loader";
import useAuth from '../../hooks/useAuth';

const Explore = () => {
    const [isLoading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    useEffect(() => {
        setLoading(true)
        axios.get('https://powerful-mountain-89009.herokuapp.com/allProducts')
            .then(res => {
                setProducts(res.data)
                setLoading(false)
            }).catch(err => setLoading(false))
    }, [])

    return (
        <Box>
            <Navigation></Navigation>
            <Divider />
            <Container>
                <Box
                    sx={{
                        pt: 3,
                        px: { sm: '0px', md: '20px', lg: "50px" }
                    }}>
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            fontWeight: 'bold'
                        }}>
                        Explore All
                        <Box
                            sx={{
                                color: 'tomato',
                                display: 'inline'
                            }}>
                            Products
                        </Box>
                    </Typography>
                    <Box
                        sx={{
                            textAlign: 'center',
                            color: 'orange'
                        }}>
                        <span>Collection</span>
                    </Box>

                    {isLoading &&
                        <Box
                            sx={{
                                my: 15,
                                textAlign: 'center'
                            }}>
                            <Loader
                                type="box-rectangular"
                                bgColor={"tomato"}
                                title={"bubble-loop"}
                                color={'#FFFFFF'}
                                size={100} />
                        </Box>}

                    <Box
                        sx={{
                            pt: 2,
                            display: 'grid',
                            gridTemplateColumns: {
                                md: 'repeat(4, 1fr)',
                                sm: 'repeat(1, 1fr)'
                            }
                        }}>
                        {
                            products.map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </Box>
                </Box>
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default Explore;