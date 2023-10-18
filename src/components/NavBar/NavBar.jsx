import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logoImg from './Escudo-cndf.png'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link to="/">
                        <img src={logoImg} alt="EscudoNacional" className="logo-img" />
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to="/">
                                <p className='nav-link active' aria-current='page'>
                                    Inicio
                                </p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/category/camisetas">
                                <p className='nav-link'>Camisetas</p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/category/pantalones">
                                <p className='nav-link'>Pantalones</p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/category/canguros">
                                <p className='nav-link'>Canguros</p>
                            </Link>
                        </li>
                    </ul>
                </div>

                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar