export const setCart = (cart) => ({ //add cart item
    type: 'SET_CART',
    cart,
});

export const deleteCart = (cart) => ({ //delete cart item
    type: 'DELETE_CART',
    cart,
});