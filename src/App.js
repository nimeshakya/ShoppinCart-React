import React from 'react';

import NavBar from './Components/NavBar';
import ShoesContainer from './Components/ShoesContainer';
import CartModal from './Components/CartModal';

import { GlobalContext, GlobalProvider } from './Context/GlobalState';

const App = () => {
    const { showCartModal } = React.useContext(GlobalContext);
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
