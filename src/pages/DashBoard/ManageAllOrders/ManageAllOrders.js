import React, { useEffect, useState } from 'react';
import SingleAllOrder from './SingleAllOrder';
import axios from 'axios';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Loader from "react-js-loader";

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [load, setLoad] = useState(false)
    const [pending, setPending] = useState(0);
    const [delivered, setDelivered] = useState(0);
    const [shipped, setShipped] = useState(0);

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
        const pending = orders.filter(order => order.status === 'pending')
        setPending(pending.length)
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
        } else {
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
                        console.log(allOrders);
                        setOrders(allOrders)
                    }
                    console.log(res)
                })
        }

    }


    return (
        <div>
            <Box><Typography variant='h6' sx={{ textAlign: 'center' }}>Total Order: {orders.length} Pending:{pending} shipped: {shipped} Completed:{delivered}</Typography></Box>
            {load && <Loader type="spinner-cub" bgColor={"tomato"} size={50} />}
            {
                orders.map(order => <SingleAllOrder handleUpdateOrder={handleUpdateOrder} order={order}></SingleAllOrder>)
            }
        </div>
    );
};

export default ManageAllOrders;