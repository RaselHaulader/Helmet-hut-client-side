import React, { useEffect, useState } from 'react';
import SingleAllOrder from './SingleAllOrder';
import axios from 'axios';

const ManageAllOrders = () => {
   const [orders, setOrders] = useState([])

   useEffect(()=>{
       axios.get('http://localhost:5000/allOrders')
       .then(res=>setOrders(res.data))
   },[])
   

   const handleUpdateOrder =(id,status)=>{
       axios.post('http://localhost:5000/handleUpdateOrder', {id, status})
       .then(res=>console.log(res))
   }
    
    return (
        <div>
            {
                orders.map(order => <SingleAllOrder handleUpdateOrder={handleUpdateOrder} order={order}></SingleAllOrder>)
            }
        </div>
    );
};

export default ManageAllOrders;