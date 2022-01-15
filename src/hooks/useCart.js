import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const useCart = ()=>{ 
const cartItems = useContext(CartContext)
return cartItems;
}

export default useCart;