import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder'
import axios from 'axios';
import useAuth from '../../../hooks/useAuth'



const UserOrder = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        axios.get(`http://localhost:5000/userOrder/${user.email}`)
            .then(res => {
                setOrders(res.data)
                console.log(res.data)
            })
    }, [])
    return (
        <div>
            {
                orders.map(order=><SingleOrder key={order._id} order={order}></SingleOrder>)
            }
        </div>
    );
};

export default UserOrder;