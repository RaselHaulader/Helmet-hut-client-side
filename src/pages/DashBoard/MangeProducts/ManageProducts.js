import React, { useEffect, useState } from 'react';
import SingleManageProduct from './SingleManageProducts';
import axios from 'axios';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://powerful-mountain-89009.herokuapp.com/allProducts')
            .then(res => setProducts(res.data))
    }, [])

    const handleUpdateProduct = id => {
        axios.post('https://powerful-mountain-89009.herokuapp.com/handleUpdateProduct', { id })
            .then(res => {
                if (res.data.deletedCount > 0) {
                    const restProducts = products.filter(product => product._id !== id);
                    setProducts(restProducts);
                    alert('deleted')
                }
                console.log(res)
            })
    }
    return (
        <div>
            <Box><Typography variant='h6' sx={{ textAlign: 'center' }}> Total amount of product is: {products.length}</Typography></Box>
            {
                products.map(product => <SingleManageProduct handleUpdateProduct={handleUpdateProduct} product={product}></SingleManageProduct>)
            }

        </div>
    );
};

export default ManageProducts;