import React, { createContext } from 'react';
import useCartItem from '../hooks/useCartItem';


export const CartContext = createContext()

const CartProvider = ({children}) => {
    const cartItems = useCartItem()
    return (
        <CartContext.Provider value={cartItems}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;