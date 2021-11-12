import React, { useEffect, useState } from 'react';
import SingleManageProduct from './SingleManageProducts';
import axios from 'axios';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Loader from "react-js-loader";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false)
    const [load2, setLoad2] = useState({})

    useEffect(() => {
        setLoad(true)
        axios.get('https://powerful-mountain-89009.herokuapp.com/allProducts')
            .then(res => {
                setLoad(false)
                setProducts(res.data)
            })
    }, [])

    const handleUpdateProduct = id => {
        const confirm = window.confirm("Are You sure??")
        if (!confirm) {
            return
        } else {
            setLoad2({ load: true, id })
            axios.post('https://powerful-mountain-89009.herokuapp.com/handleUpdateProduct', { id })
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const restProducts = products.filter(product => product._id !== id);
                        setProducts(restProducts);
                        setLoad2({ load: false, id })
                    }
                    console.log(res)
                })
        }

    }
    return (
        <div>
            <Box><Typography variant='h6' sx={{ textAlign: 'center' }}> Total amount of product is: {products.length} </Typography></Box>
            {load && <Loader type="spinner-cub" bgColor={"tomato"} size={50} />}
            {
                products.map(product => <SingleManageProduct load2={load2} handleUpdateProduct={handleUpdateProduct} product={product}></SingleManageProduct>)
            }

        </div>
    );
};

export default ManageProducts;