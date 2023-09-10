import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link to="/">
                    <a className='navbar-brand' href='#' role='link'>
                        Tienda Nacional
                    </a>
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
                            <Link to="/"> {/* Enlace a mostrar todos los productos */}
                                <button className='nav-link active' aria-current='page'>
                                    Inicio
                                </button>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/category/camisetas"> {/* Enlace a Camisetas */}
                                <button className='nav-link'>Camisetas</button>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/category/pantalones"> {/* Enlace a Pantalones */}
                                <button className='nav-link'>Pantalones</button>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/category/canguros"> {/* Enlace a Canguros */}
                                <button className='nav-link'>Canguros</button>
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