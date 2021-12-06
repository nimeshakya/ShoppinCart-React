import React from 'react';

import NavBar from './Components/NavBar';
import ShoesContainer from './Components/ShoesContainer';
import CartModal from './Components/CartModal';

const App = () => {
    return (
        <div>
            <NavBar />
            <ShoesContainer />
            <CartModal />
        </div>
    );
};

export default App;
