import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    console.log(cart)

    const calculateTotalQuantity = (cartItems) => {
        let total = 0;
        cartItems.forEach((item) => {
          total += item.quantity;
        });
        return total;
      };

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    useEffect(() => {
        const updatedTotalQuantity = calculateTotalQuantity(cart);
        setTotalQuantity(updatedTotalQuantity);
      }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
            { children }
        </CartContext.Provider>
    )
}