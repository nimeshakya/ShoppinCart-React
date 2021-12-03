import React, { useState, useEffect } from 'react';

import Navbar from './Component/Navbar';
import ShoesContainer from './Component/ShoesContainer';
import CartModal from './Component/CartModal';

import SmallNavbar from './Component/SmallNavbar';
import NavModal from './Component/NavModal';

import data from './data';

const App = () => {
    const [shoesData, setShoesData] = useState(() => {
        const localData = localStorage.getItem('shoesData');
        return localData ? JSON.parse(localData) : data;
    });
    const [cartShoesData, setCartShoesData] = useState(
        shoesData.filter((shoes) => shoes.inCart === true)
    );

    const [showCart, setShowCart] = useState(false);

    const [showNavModal, setShowNavModal] = useState(false);

    useEffect(() => {
        localStorage.setItem('shoesData', JSON.stringify(shoesData));
    }, [shoesData, cartShoesData]);

    return (
        <div>
            {/* Navbar for small screens with nav modal */}
            <SmallNavbar
                showCart={showCart}
                setShowCart={setShowCart}
                cartShoesData={cartShoesData}
                showNavModal={showNavModal}
                setShowNavModal={setShowNavModal}
            />
            {showNavModal && (
                <NavModal
                    showNavModal={showNavModal}
                    setShowNavModal={setShowNavModal}
                />
            )}

            {/* Navbar for larger screens */}
            <Navbar
                showCart={showCart}
                setShowCart={setShowCart}
                cartShoesData={cartShoesData}
            />
            <ShoesContainer
                shoesData={shoesData}
                setShoesData={setShoesData}
                cartShoesData={cartShoesData}
                setCartShoesData={setCartShoesData}
            />
            {showCart && (
                <CartModal
                    shoesData={shoesData}
                    setShoesData={setShoesData}
                    cartShoesData={cartShoesData}
                    setCartShoesData={setCartShoesData}
                    showCart={showCart}
                    setShowCart={setShowCart}
                />
            )}
        </div>
    );
};

export default App;
