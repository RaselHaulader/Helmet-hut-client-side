import React, { useEffect, useState } from 'react';
import SingleAllOrder from './SingleAllOrder';
import axios from 'axios';

const ManageAllOrders = () => {
   const [orders, setOrders] = useState([])

   useEffect(()=>{
       axios.get('http://localhost:5000/allOrders')
       .then(res=>setOrders(res.data))
   },[])

    
    return (
        <div>
            {
                orders.map(order => <SingleAllOrder order={order}></SingleAllOrder>)
            }
        </div>
    );
};

export default ManageAllOrders;