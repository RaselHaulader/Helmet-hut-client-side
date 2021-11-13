import React, { useEffect, useState } from 'react';
import SingleManageProduct from './SingleManageProducts';
import axios from 'axios';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Loader from "react-js-loader";
import Swal from 'sweetalert2'

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
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoad2({ load: true, id })
                axios.post('https://powerful-mountain-89009.herokuapp.com/handleUpdateProduct', { id })
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const restProducts = products.filter(product => product._id !== id);
                            setProducts(restProducts);
                            setLoad2({ load: false, id })
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Successfully Delete.',
                    'success'
                )
            }
        })

    }
    return (
        <div>
            <Box><Typography variant='h6' sx={{ my: 3, textAlign: 'center', fontWeight: 'bolder', color: 'gray' }}> Total amount of product is: {products.length} </Typography></Box>
            <Divider></Divider>
            <Box sx={{ py: 3 }}>
                {load && <Loader type="spinner-cub" bgColor={"tomato"} size={50} />}
                {
                    products.map(product => <SingleManageProduct key={product._id} load2={load2} handleUpdateProduct={handleUpdateProduct} product={product}></SingleManageProduct>)
                }
            </Box>

        </div>
    );
};

export default ManageProducts;