import React, { useEffect, useState } from 'react';
import SingleManageProduct from './SingleManageProducts';
import axios from 'axios';
const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/allProducts')
            .then(res => setProducts(res.data))
    }, [])
    return (
        <div>
            <h2>manage product</h2>
            {
                products.map(product => <SingleManageProduct product={product}></SingleManageProduct>)
            }

        </div>
    );
};

export default ManageProducts;