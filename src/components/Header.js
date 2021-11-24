import React from 'react';
import '../styles/components/Header.css'

export default () => {
    return (
        <header>
            <div id="menu-bar" class="fas fa-bars"></div>

            <a href="#" className="logo"><span>t</span>icket.com</a>

                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#categorias">Categorias</a>
                    <a href="#eventos">Eventos</a>
                    <a href="#destaques">Destaques</a>
                    
                </nav>

                <div className="icons">
                    <i className="fas fa-search" id="search-btn"></i>
                    <i className="fas fa-user" id="login-btn"></i>
                </div>

                <form action="" className="search-bar-container">
                    <input type="search" id="search-bar" placeholder="search here..."/>
                    <label for="search-bar" className="fas fa-search"></label>
                </form>
        </header>
    )
}