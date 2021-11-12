import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder'
import axios from 'axios';
import useAuth from '../../../hooks/useAuth'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';



const UserOrder = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()

    const handleCancel = id => {
        axios.post('https://powerful-mountain-89009.herokuapp.com/handleCancel', {id})
            .then(res =>{ 
                if (res.data.deletedCount>0) {
                    const restOrder = orders.filter(order=> order._id !== id)
                    setOrders(restOrder)
                }
                console.log(res)})
    }
    useEffect(() => {
        axios.get(`https://powerful-mountain-89009.herokuapp.com/userOrder/${user.email}`)
            .then(res => {
                setOrders(res.data)
                console.log(res.data)
            })
    }, [])
    return (
        <div>
            <Box><Typography variant='h6' sx={{textAlign:'center'}}> Your Total Order is: {orders.length}</Typography></Box>
            {
                orders.map(order => <SingleOrder handleCancel={handleCancel} key={order._id} order={order}></SingleOrder>)
            }
        </div>
    );
};

export default UserOrder;