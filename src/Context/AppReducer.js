const AppReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_CART':
            return {
                ...state,
                showCartModal: !state.showCartModal,
            };

        case 'ADD_TO_CART':
            return {
                ...state,
                shoesData: state.shoesData.map((shoe) => {
                    if (shoe.id === action.payload.id) {
                        shoe.inCart = !shoe.inCart;
                        return shoe;
                    } else {
                        return shoe;
                    }
                }),
                shoesInCart: [...state.shoesInCart, action.payload],
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                shoesData: state.shoesData.map((shoe) => {
                    if (shoe.id === action.payload.id) {
                        shoe.inCart = !shoe.inCart;
                        return shoe;
                    } else {
                        return shoe;
                    }
                }),
                shoesInCart: state.shoesInCart.filter(
                    (item) => item.id !== action.payload.id
                ),
            };

        default:
            return state;
    }
};

export default AppReducer;
