import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useCartItem = () => {
    const { user } = useAuth()
    const [items, setItems] = useState([]);
    const saveCartToDb = (data) => {
        axios.post('https://powerful-mountain-89009.herokuapp.com/saveCart', data)
            .then(res => console.log(res))
    }
    useEffect(() => {

        user.email ? axios.post('https://powerful-mountain-89009.herokuapp.com/getCart', { email: user.email })
            .then(res => {
                console.log(res.data)
                setItems(res.data)
            }) : setItems([])

    }, [user])

    const addItem = (id, name, price, img) => {
        const existingItems = [...items]
        const check = existingItems.filter(item => item.id == id)
        if (check[0]?.id) {
            const cuurCount = check[0].count;
            existingItems[existingItems.indexOf(check[0])] = { id, name, price, img, count: cuurCount + 1 }
            console.log([...existingItems]);
            setItems([...existingItems])
            saveCartToDb({ email: user.email, orders: existingItems })
        } else {
            const updatedItems = [...items, { id, name, price, img, count: 1 }]
            setItems(updatedItems)
            saveCartToDb({ email: user.email, orders: updatedItems })
        }
    }

    const removeItem = (id) => {
        const existingItems = [...items]
        const query = existingItems.filter(item => item.id == id)
        if (query[0].count > 1) {
            const currCount = query[0].count
            const updatedItem = query[0];
            delete updatedItem.count;
            existingItems[existingItems.indexOf(query[0])] = { ...updatedItem, count: currCount - 1 }
            setItems([...existingItems])
            saveCartToDb({ email: user.email, orders: existingItems })
        } else {
            const i = existingItems.indexOf(query[0]);
            existingItems.splice(i, 1);
            setItems([...existingItems]);
            saveCartToDb({ email: user.email, orders: existingItems })
        }
    }

    return {
        items,
        addItem,
        removeItem,
        setItems,
        saveCartToDb
    }
}

export default useCartItem;

