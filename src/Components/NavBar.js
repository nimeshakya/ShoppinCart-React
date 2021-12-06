import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
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
            <div className='cart-btn-container'>
                <h3>0</h3>
                <FontAwesomeIcon icon={faCartArrowDown} className='cart-icon' />
            </div>
        </nav>
    );
};

export default NavBar;
