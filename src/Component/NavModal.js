import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const NavModal = ({ showNavModal, setShowNavModal }) => {
    return (
        <section className='nav-modal'>
            <h1>Shopping Cart</h1>
            <FontAwesomeIcon
                icon={faTimes}
                className='nav-modal-close-btn'
                onClick={() => setShowNavModal(!showNavModal)}
            />
            <ul className='nav-modal-link-container'>
                <li className='nav-modal-link'>
                    <a href='#'>Home</a>
                </li>
                <li className='nav-modal-link'>
                    <a href='#'>About</a>
                </li>
                <li className='nav-modal-link'>
                    <a href='#'>Services</a>
                </li>
                <li className='nav-modal-link'>
                    <a href='#'>Pricing</a>
                </li>
                <li className='nav-modal-link'>
                    <a href='#'>Contact</a>
                </li>
            </ul>
        </section>
    );
};

export default NavModal;
