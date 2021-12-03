import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import CartModalShoes from './CartModalShoes';

const CartModal = ({
    shoesData,
    setShoesData,
    cartShoesData,
    setCartShoesData,
    showCart,
    setShowCart,
}) => {
    let amountToPay = 0;

    for (let i = 0; i < cartShoesData.length; i++) {
        amountToPay += cartShoesData[i].quantityInCart * cartShoesData[i].price;
    }

    return (
        <div>
            <div className='cart-overlay'>
                <div className='cart-modal'>
                    <div className='cart-header'>
                        <h1>Shopping Cart</h1>
                        <FontAwesomeIcon
                            icon={faTimes}
                            onClick={() => setShowCart(!showCart)}
                            className='cart-close-icon'
                        />
                    </div>

                    {cartShoesData.length > 0 ? (
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
                                {cartShoesData.map((cartShoe) => {
                                    return (
                                        <CartModalShoes
                                            key={cartShoe.id}
                                            cartShoe={cartShoe}
                                            shoesData={shoesData}
                                            setShoesData={setShoesData}
                                            cartShoesData={cartShoesData}
                                            setCartShoesData={setCartShoesData}
                                        />
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <h2 className='cart-empty-msg'>No Items In Cart</h2>
                    )}

                    <div className='cart-footer'>
                        <h3>Cart Total</h3>
                        <h3>Number of items: {cartShoesData.length}</h3>
                        <h3>Total Price: ${amountToPay}</h3>
                    </div>
                    <button className='checkout-btn'>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
