import React from 'react';
import useCart from '../../../hooks/useCart';
import './Payment.css';
const SingleItem = ({item}) => {
    const {addItem,removeItem} = useCart()
    const {id, name, price, img , count} = item;
    return (
        <div className='singleItem-container'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <h5>{count  +" X " + price }</h5>
            <h5> = </h5>
            <h5>{count  * price } $</h5>
        </div>
    );
};

export default SingleItem;