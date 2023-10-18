import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: [],
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log(cart);

    const calculateTotalQuantity = (cartItems) => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            setCart(prev => prev.map(cartItem => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + quantity };
                }
                return cartItem;
            }));
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    }

    useEffect(() => {
        const updatedTotalQuantity = calculateTotalQuantity(cart);
        console.log(updatedTotalQuantity);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}
