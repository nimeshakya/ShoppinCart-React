import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { GlobalContext } from '../Context/GlobalState';

const CartModalShoe = ({ shoe }) => {
    const { removeFromCart, quantityInCartChange } =
        React.useContext(GlobalContext);

    const [shoeQuantity, setShoeQuantity] = React.useState(shoe.quantityInCart);

    useEffect(() => {
        quantityInCartChange(shoe, shoeQuantity);
    }, [shoeQuantity]);

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
                    value={shoeQuantity}
                    onChange={(e) => setShoeQuantity(parseInt(e.target.value))}
                    className='amount-input'
                />
            </td>
            <td>${shoeQuantity * shoe.price}</td>
            <td>
                <FontAwesomeIcon
                    icon={faTrash}
                    className='cart-item-rmv-btn'
                    onClick={() => removeFromCart(shoe)}
                />
            </td>
        </tr>
    );
};

export default CartModalShoe;
