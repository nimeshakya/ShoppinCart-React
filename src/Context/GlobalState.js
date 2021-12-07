import React, { useState, useEffect } from 'react';

import AppReducer from './AppReducer';
import data from '../data';

const initialState = {
    shoesData: data,
    shoesInCart: [],
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

    const addToCart = (shoe) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: shoe,
        });
    };

    const removeFromCart = (shoe) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: shoe,
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                shoesData: state.shoesData,
                shoesInCart: state.shoesInCart,
                showCartModal: state.showCartModal,
                showNavModal: state.showNavModal,
                toggleShowCart,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
