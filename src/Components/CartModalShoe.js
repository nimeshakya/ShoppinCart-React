import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { GlobalContext } from '../Context/GlobalState';

const CartModalShoe = ({ shoe }) => {
    const { toggleShoeInCart } = React.useContext(GlobalContext);
    return (
        <tr className='shoe-in-cart'>
            <td>
                <img src={shoe.image} alt={shoe.name} />
            </td>
            <td>{shoe.name}</td>
            <td>
                <input
                    type='number'
                    name='shoe-quantity'
                    min='0'
                    max='10'
                    className='amount-input'
                />
            </td>
            <td>$0</td>
            <td>
                <FontAwesomeIcon
                    icon={faTrash}
                    className='cart-item-rmv-btn'
                    onClick={() => toggleShoeInCart(shoe.id)}
                />
            </td>
        </tr>
    );
};

export default CartModalShoe;
