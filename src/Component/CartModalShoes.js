import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartModalShoes = ({
    cartShoe,
    shoesData,
    cartShoesData,
    setCartShoesData,
}) => {
    const [shoeQuantity, setShoeQuantity] = useState(cartShoe.quantityInCart);
    const [shoeTotalAmount, setShoeTotalAmount] = useState(
        cartShoe.price * shoeQuantity
    );

    useEffect(() => {
        setShoeTotalAmount(cartShoe.price * shoeQuantity);

        // change cart shoe quantity when it changes
        setCartShoesData(
            cartShoesData.map((item) => {
                if (item.id === cartShoe.id) {
                    item.quantityInCart = parseInt(shoeQuantity);
                    return item;
                } else {
                    return item;
                }
            })
        );
    }, [shoeQuantity]);

    const handleRemoveItem = (id) => {
        setCartShoesData(cartShoesData.filter((item) => item.id !== id));

        for (let i = 0; i < shoesData.length; i++) {
            if (shoesData[i].id === cartShoe.id) {
                shoesData[i].inCart = !shoesData[i].inCart;
                shoesData[i].quantityInCart = 0;
            }
        }
    };

    return (
        <tr className='shoe-in-cart'>
            <td>
                <img src={cartShoe.image} alt={cartShoe.name} />
            </td>
            <td>{cartShoe.name}</td>
            <td>
                <input
                    type='number'
                    name='shoe-quantity'
                    min='0'
                    max='10'
                    value={shoeQuantity}
                    onChange={(e) => setShoeQuantity(e.target.value)}
                />
            </td>
            <td>${shoeTotalAmount}</td>
            <td>
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => handleRemoveItem(cartShoe.id)}
                    className='cart-item-rmv-btn'
                />
            </td>
        </tr>
    );
};

export default CartModalShoes;
