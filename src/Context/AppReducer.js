const AppReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_CART':
            return {
                ...state,
                showCartModal: !state.showCartModal,
            };
        default:
            return state;
    }
};

export default AppReducer;
