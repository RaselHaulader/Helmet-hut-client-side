import React, { useEffect, useState } from 'react';
import SingleManageProduct from './SingleManageProducts';
import axios from 'axios';
const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/allProducts')
            .then(res => setProducts(res.data))
    }, [])

    const handleUpdateProduct=id=>{
        axios.post('http://localhost:5000/handleUpdateProduct', {id})
        .then(res=>{
            if (res.data.deletedCount>0) {
                const restProducts = products.filter(product=> product._id!==id);
                setProducts(restProducts);
            alert('deleted')
            }
            console.log(res)})
    }
    return (
        <div>
            <h2>manage product</h2>
            {
                products.map(product => <SingleManageProduct handleUpdateProduct={handleUpdateProduct} product={product}></SingleManageProduct>)
            }

        </div>
    );
};

export default ManageProducts;