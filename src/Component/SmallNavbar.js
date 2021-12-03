import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faBars } from '@fortawesome/free-solid-svg-icons';

const SmallNavbar = ({
    showCart,
    setShowCart,
    cartShoesData,
    showNavModal,
    setShowNavModal,
}) => {
    return (
        <div className='small-navbar'>
            <FontAwesomeIcon
                icon={faBars}
                className='nav-modal-open-btn'
                onClick={() => setShowNavModal(!showNavModal)}
            />
            <h1>Shopping Cart</h1>

            <div
                className='cart-btn-container'
                onClick={() => setShowCart(!showCart)}
            >
                <h3>{cartShoesData.length}</h3>
                <FontAwesomeIcon icon={faCartArrowDown} className='cart-icon' />
            </div>
        </div>
    );
};

export default SmallNavbar;
