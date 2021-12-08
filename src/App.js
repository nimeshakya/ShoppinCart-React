import React from 'react';

import NavBar from './Components/NavBar';
import ShoesContainer from './Components/ShoesContainer';
import CartModal from './Components/CartModal';
import SmallNavbar from './Components/SmallNavbar';
import NavModal from './Components/NavModal';

import { GlobalProvider } from './Context/GlobalState';

const App = () => {
    return (
        <GlobalProvider>
            <div>
                <SmallNavbar />
                <NavModal />
                <NavBar />
                <ShoesContainer />
                <CartModal />
            </div>
        </GlobalProvider>
    );
};

export default App;
