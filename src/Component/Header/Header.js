import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'


const Header = () => {
    return (
        <nav className='header'>
            <img src= {logo} alt="" />

            <div>
                <a href="/shops">Shop</a>
                <a href="/orders">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">Abut Us</a>
            </div>
            
        </nav>
    );
};

export default Header;