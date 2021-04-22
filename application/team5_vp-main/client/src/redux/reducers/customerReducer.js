const INITIAL_STATE = {
    //Fake data, need database
    restaruant_menu: [{ name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }],
    //fake cart data
    cart: [{ name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }]
};

const customerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_RESTARUANT_MENU":
            return {
                ...state,
                restaruant_menu: action.restaruant_menu,
            };
        case "SET_CART":
            return {
                ...state,
                cart: [...state.cart, action.cart],
            };
        case "DELETE_CART":
            return {
                ...state,
                cart: action.cart,
            };
        default:
            return state;
    }
};

export default customerReducer;