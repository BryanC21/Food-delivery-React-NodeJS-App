const INITIAL_STATE = {
    restaruant_menu: [{name: "burger", price: "17.99"},{name: "burger", price: "17.99"},{name: "burger", price: "17.99"},{name: "burger", price: "17.99"},{name: "burger", price: "17.99"},{name: "burger", price: "17.99"},{name: "burger", price: "17.99"}],
    search_type: ""
};

const customerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_RESTARUANT_MENU":
            return {
            ...state,
            restaruant_menu: action.restaruant_menu,
            };
        default:
            return state;
    }
    };

export default customerReducer;