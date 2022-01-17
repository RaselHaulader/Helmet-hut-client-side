import { useState } from "react";

const useCartItem = () => {
    const [items, setItems] = useState([]);

    const addItem = (id, name, price, img) => {
        const existingItems = [...items]
        const check = existingItems.filter(item => item.id == id)
        if (check[0]?.id) {
            const cuurCount = check[0].count;
            existingItems[existingItems.indexOf(check[0])] = { id, name, price, img, count: cuurCount + 1 }
            setItems([...existingItems])
        } else {
            setItems([...items, { id, name, price, img, count: 1 }])
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
        } else {
            const i = existingItems.indexOf(query[0]);
            existingItems.splice(i, 1);
            setItems([...existingItems]);
        }
    }

    return {
        items,
        addItem,
        removeItem
    }
}

export default useCartItem;

