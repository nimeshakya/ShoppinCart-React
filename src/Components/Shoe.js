import React from 'react';

import { GlobalContext } from '../Context/GlobalState';

const Shoe = ({ shoe }) => {
    return (
        <li className='shoe-in-list'>
            <div className='img-container'>
                <img src={shoe.image} alt={shoe.name} />
            </div>
            <div className='details-container'>
                <h2>{shoe.name}</h2>
                <h3>${shoe.price}</h3>
                <button
                    className={
                        shoe.inCart ? 'button-incart' : 'button-notincart'
                    }
                    disabled={shoe.inCart}
                >
                    {shoe.inCart ? 'In the Cart' : 'Add to Cart'}
                </button>
            </div>
        </li>
    );
};

export default Shoe;
