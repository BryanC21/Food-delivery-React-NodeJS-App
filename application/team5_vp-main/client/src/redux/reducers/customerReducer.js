const INITIAL_STATE = {
    //Fake data, need database
    restaruant_menu: [{ name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }],
    //fake cart data
    cart: [{ name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }, { name: "burger", description: "Taste good", price: "17.99" }],
    email: "",//user login email
    password: "",//user login password
    isLoggedIn: false
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
        case "SET_EMAIL": //login email
            return {
                ...state,
                email: action.email,
            };
        case "SET_PASSWORD": //login password
            return {
                ...state,
                email: action.password,
            };
        case "SET_ISLOGGEDIN":
            return{
                ...state,
                isLoggedIn: action.isLoggedIn,
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