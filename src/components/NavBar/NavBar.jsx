import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <a class="navbar-brand" href="#" role="link">Tienda Nacional</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <button class="nav-link active" aria-current="page">Inicio</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link">Camisetas</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link">Pantalones</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link">Canguros</button>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar