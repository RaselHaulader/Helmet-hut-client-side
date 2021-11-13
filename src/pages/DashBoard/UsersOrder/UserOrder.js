import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder'
import axios from 'axios';
import useAuth from '../../../hooks/useAuth'
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';
import Loader from "react-js-loader";



const UserOrder = () => {
    const [load, setLoad] = useState(false)
    const [orders, setOrders] = useState([])
    const { user } = useAuth()

    const handleCancel = id => {
        const confirm = window.confirm('Are You Sure')
        if (!confirm) {
            return
        } else {
            axios.post('https://powerful-mountain-89009.herokuapp.com/handleCancel', { id })
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const restOrder = orders.filter(order => order._id !== id)
                        setOrders(restOrder)
                    }
                    console.log(res)
                })
        }

    }
    useEffect(() => {
        setLoad(true)
        axios.get(`https://powerful-mountain-89009.herokuapp.com/userOrder/${user.email}`)
            .then(res => {
                setOrders(res.data)
                console.log(res.data)
                setLoad(false)
            })
    }, [])
    return (
        <div>
            <Box><Typography variant='h6' sx={{py:3, fontWeight:'bolder',color:'gray', textAlign: 'center' }}> Your Total Order is: {orders.length}</Typography></Box>
            <Divider/><br/> 
            {load && <Loader type="spinner-cub" bgColor={"tomato"} size={50} />}
            {
                orders.map(order => <SingleOrder handleCancel={handleCancel} key={order._id} order={order}></SingleOrder>)
            }
        </div>
    );
};

export default UserOrder;