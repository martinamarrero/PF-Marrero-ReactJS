import React from 'react';


const CartItem = ({ id, name, price, quantity }) => {
    return (
        <div className="cart-item">
            <h3>{name}</h3>
            <p>Precio por unidad: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <button className='Option'>Eliminar</button>
        </div>
    );
}

export default CartItem;