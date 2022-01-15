import React from 'react';
import useCart from '../../../hooks/useCart';

const CartItem = ({item}) => {
    const {addItem,removeItem} = useCart()
    const {id, name, price, img , count} = item;
    return (
        <div className='cartItem-container'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <h5>{price * count}</h5>
            <div><span onClick={()=>removeItem(id)}> - </span><input value={count} type="text" /><span onClick={()=>addItem(id,name, price, img)}> + </span></div>
        </div>
    );
};

export default CartItem;