import React, { useState, useEffect } from 'react';

import AppReducer from './AppReducer';
import data from '../data';

const initialState = {
    shoesData: data,
    showCartModal: false,
    showNavModal: false,
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(AppReducer, initialState);

    // Actions
    const toggleShowCart = () => {
        dispatch({ type: 'TOGGLE_SHOW_CART' });
    };

    return (
        <GlobalContext.Provider
            value={{
                shoesData: state.shoesData,
                shoesInCart: state.shoesInCart,
                showCartModal: state.showCartModal,
                showNavModal: state.showNavModal,
                toggleShowCart,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
