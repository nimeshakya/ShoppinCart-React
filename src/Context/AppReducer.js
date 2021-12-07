const AppReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_CART':
            return {
                ...state,
                showCartModal: !state.showCartModal,
            };

        case 'TOGGLE_SHOE_IN_CART':
            return {
                ...state,
                shoesData: state.shoesData.map((shoe) => {
                    if (shoe.id === action.payload) {
                        shoe.inCart = !shoe.inCart;
                        return shoe;
                    } else {
                        return shoe;
                    }
                }),
            };

        default:
            return state;
    }
};

export default AppReducer;
