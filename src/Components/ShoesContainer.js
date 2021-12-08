import React, { useContext } from 'react';

import Shoe from './Shoe';
import { GlobalContext } from '../Context/GlobalState';

const ShoesContainer = () => {
    const { shoesData } = useContext(GlobalContext);
    return (
        <ul className='shoe-list-section'>
            {shoesData.map((shoe) => {
                return <Shoe key={shoe.id} shoe={shoe} />;
            })}
        </ul>
    );
};

export default ShoesContainer;
