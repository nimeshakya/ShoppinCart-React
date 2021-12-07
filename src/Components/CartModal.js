import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { GlobalContext } from '../Context/GlobalState';
import CartModalShoe from './CartModalShoe';

const CartModal = () => {
    const { shoesData, toggleShowCart, showCartModal } =
        React.useContext(GlobalContext);
    return (
        <>
            {showCartModal && (
                <div className='cart-overlay'>
                    <div className='cart-modal'>
                        <div className='cart-header'>
                            <h1>Shopping Cart</h1>
                            <FontAwesomeIcon
                                icon={faTimes}
                                onClick={toggleShowCart}
                                className='cart-close-icon'
                            />
                        </div>
                        <table className='cart-table' width='100%'>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {shoesData
                                    .filter((item) => item.inCart === true)
                                    .map((shoe) => {
                                        return (
                                            <CartModalShoe
                                                key={shoe.id}
                                                shoe={shoe}
                                            />
                                        );
                                    })}
                            </tbody>
                        </table>
                        <div className='cart-footer'>
                            <h3>Cart Total</h3>
                            <h3>Number of items: 0</h3>
                            <h3>Total Price: $0</h3>
                        </div>
                        <button className='checkout-btn'>Checkout</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartModal;
