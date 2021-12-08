import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faBars } from '@fortawesome/free-solid-svg-icons';

import { GlobalContext } from '../Context/GlobalState';

const SmallNavbar = () => {
    const { shoesInCart, toggleNavModal, toggleShowCart } =
        React.useContext(GlobalContext);
    return (
        <div className='small-navbar'>
            <FontAwesomeIcon
                icon={faBars}
                className='nav-modal-open-btn'
                onClick={toggleNavModal}
            />
            <h1>Shopping Cart</h1>

            <div className='cart-btn-container' onClick={toggleShowCart}>
                <h3>{shoesInCart.length}</h3>
                <FontAwesomeIcon icon={faCartArrowDown} className='cart-icon' />
            </div>
        </div>
    );
};

export default SmallNavbar;
