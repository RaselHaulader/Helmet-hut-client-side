import React, { useEffect, useState } from 'react';
import SingleAllOrder from './SingleAllOrder';
import axios from 'axios';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Loader from "react-js-loader";

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [load, setLoad] = useState(false)
    const [paid, setPaid] = useState(0);
    const [delivered, setDelivered] = useState(0);
    const [shipped, setShipped] = useState(0);
    const [load2, setLoad2] = useState({})

    useEffect(() => {
        setLoad(true)
        axios.get('https://powerful-mountain-89009.herokuapp.com/allOrders')
            .then(res => {
                setLoad(false)
                setOrders(res.data)
            })
    }, [])
    //count status
    useEffect(() => {
        const Paid = orders.filter(order => order.status === 'Paid')
        setPaid(Paid.length)
        const shipped = orders.filter(order => order.status === 'Shipped')
        setShipped(shipped.length)
        const delivered = orders.filter(order => order.status === 'Delivered')
        setDelivered(delivered.length)
    }, [orders])

    // handle action
    const handleUpdateOrder = (id, status) => {

        if (status === 'delete') {
            const confirm = window.confirm('Are You Sure')
            if (!confirm) {
                return
            }
        }
        if (status !== 'delete') {
            setLoad2({ load: true, id })
        }
        axios.post('https://powerful-mountain-89009.herokuapp.com/handleUpdateOrder', { id, status })
            .then(res => {
                // update status
                if (res.data.deletedCount > 0) {
                    const restItems = orders.filter(order => order._id !== id)
                    setOrders(restItems)
                } else if (res.data.modifiedCount > 0) {
                    // delete order
                    const actionItem = orders.filter(order => order._id === id)
                    const allOrders = [...orders];
                    const updateOrderIndex = allOrders.indexOf(actionItem)
                    actionItem[0].status = status;
                    allOrders[updateOrderIndex] = actionItem;
                    setOrders(allOrders)
                    setLoad2({ load: false, id })
                }
            })
    }
    return (
        <div>
            <Box sx={{ boxShadow: 1 }}>
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: 'bolder',
                        color: 'gray',
                        py: 3,
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: { sm: 'column', xs: 'column', md: 'row' },
                        justifyContent: 'space-evenly'
                    }}>
                    <Box> Total Order: {orders.length}</Box>
                    <Box > Pending:{paid}</Box>
                    <Box > Shipped: {shipped}</Box>
                    <Box> Delivered:{delivered}</Box>
                </Typography>
                <Divider></Divider>
            </Box>
            {load && <Loader type="spinner-cub" bgColor={"tomato"} size={50} />}
            {
                orders.map(order => <SingleAllOrder key={order._id} load2={load2} handleUpdateOrder={handleUpdateOrder} order={order}></SingleAllOrder>)
            }
        </div>
    );
};

export default ManageAllOrders;