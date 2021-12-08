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
                        shoe.quantityInCart = 0;
                        return shoe;
                    } else {
                        return shoe;
                    }
                }),
                shoesInCart: state.shoesInCart.filter(
                    (item) => item.id !== action.payload.id
                ),
            };

        case 'QUANTITY_IN_CART_CHANGE':
            return {
                ...state,
                shoesData: state.shoesData.map((item) => {
                    if (item.id === action.payload.shoe.id) {
                        item.quantityInCart = action.payload.quantityInCart;
                        return item;
                    } else {
                        return item;
                    }
                }),
                shoesInCart: state.shoesInCart.map((item) => {
                    if (item.id === action.payload.shoe.id) {
                        item.quantityInCart = action.payload.quantityInCart;
                        return item;
                    } else {
                        return item;
                    }
                }),
            };

        case 'TOGGLE_NAV_MODAL':
            return {
                ...state,
                showNavModal: !state.showNavModal,
            };

        default:
            return state;
    }
};

export default AppReducer;
