import React, { useContext } from 'react';
import './cart.css';
import { CartContext } from '../../context/cartContext'
import CartItem from '../CartItem/cartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className='cart-empty'>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='cart-container'>
            {cart.map(p => (
                <CartItem key={p.id} {...p} removeItem={removeItem} />
            ))}
            <h3>Total: ${total} </h3>
            <button onClick={() => clearCart()} className='Option'>Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}


export default Cart