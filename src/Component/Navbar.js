import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

function Navbar({ showCart, setShowCart, cartShoesData }) {
    return (
        <nav>
            <h1>Shopping Cart</h1>
            <ul className='nav-link-container'>
                <li className='nav-link'>
                    <a href='#'>Home</a>
                </li>
                <li className='nav-link'>
                    <a href='#'>About</a>
                </li>
                <li className='nav-link'>
                    <a href='#'>Services</a>
                </li>
                <li className='nav-link'>
                    <a href='#'>Pricing</a>
                </li>
                <li className='nav-link'>
                    <a href='#'>Contact</a>
                </li>
            </ul>
            <div
                className='cart-btn-container'
                onClick={() => setShowCart(!showCart)}
            >
                <h3>{cartShoesData.length}</h3>
                <FontAwesomeIcon icon={faCartArrowDown} className='cart-icon' />
            </div>
        </nav>
    );
}

export default Navbar;
