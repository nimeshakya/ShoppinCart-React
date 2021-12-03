import React from 'react';

import Shoes from './Shoes';

const ShoesContainer = ({
    shoesData,
    setShoesData,
    cartShoesData,
    setCartShoesData,
}) => {
    return (
        <ul className='shoe-list-section'>
            {shoesData.map((shoe) => {
                return (
                    <Shoes
                        key={shoe.id}
                        shoe={shoe}
                        shoesData={shoesData}
                        setShoesData={setShoesData}
                        cartShoesData={cartShoesData}
                        setCartShoesData={setCartShoesData}
                    />
                );
            })}
        </ul>
    );
};

export default ShoesContainer;
