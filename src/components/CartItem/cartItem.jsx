import React from 'react';

const CartItem = ({ id, name, price, quantity, removeItem }) => {

    const handleRemoveItem = () => {
        // Llama a la función removeItem con el ID del producto
        removeItem(id);
    };

    return (
        <div className="cart-item">
            <h3>{name}</h3>
            <p>Precio por unidad: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <button className='Option' onClick={handleRemoveItem}>Eliminar</button>
        </div>
    );
}

export default CartItem;