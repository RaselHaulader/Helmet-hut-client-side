import React from 'react';
import useCart from '../../../hooks/useCart';
import './Payment.css';
const SingleItem = ({ item }) => {
    const { addItem, removeItem } = useCart()
    const { id, name, price, img, count } = item;
    return (
        <div className='singleItem-container' >
            <img src={img} alt="" />
            <h5>{name}</h5>
            <h5><span className='countBtn_' onClick={() => removeItem(id)}> - </span> {count + " X " + price} <span className='countBtn' onClick={() => addItem(id, name, price, img)}> + </span></h5>
            <h5> = </h5>
            <h5>{count * price} $</h5>
        </div>
    );
};

export default SingleItem;