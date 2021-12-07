import React from 'react';

import NavBar from './Components/NavBar';
import ShoesContainer from './Components/ShoesContainer';
import CartModal from './Components/CartModal';

import { GlobalProvider } from './Context/GlobalState';

const App = () => {
    return (
        <GlobalProvider>
            <div>
                <NavBar />
                <ShoesContainer />
                <CartModal />
            </div>
        </GlobalProvider>
    );
};

export default App;
