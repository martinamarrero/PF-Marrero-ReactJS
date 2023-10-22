import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const CartItem = ({ id, title, price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemoveClick = () => {
        removeItem(id);
    }

    return (
        <div className="cart-item">
            <div className="cart-item-details">
                <h4>{title}</h4>
                <p>Precio: ${price}</p>
                <p>Cantidad: {quantity}</p>
            </div>
            <button onClick={handleRemoveClick}>Eliminar</button>
        </div>
    );
}

export default CartItem;