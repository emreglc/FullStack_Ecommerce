import { createSlice } from '@reduxjs/toolkit'

const loadCartFromLocalStorage = () => {
    try {
        const cartData = localStorage.getItem('cart');
        console.log("local data: " + cartData)
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        console.error('Error loading cart data from local storage:', error);
        return [];
    }
};

const saveCartToLocalStorage = (cart) => {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart data to local storage:', error);
    }
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: loadCartFromLocalStorage(),
    reducers: {

        addToCart: (state, action) => {
            const { name, price, index } = action.payload;
            state.splice(index, 0, { name, price });
            saveCartToLocalStorage(state);
        },
        removeFromCart: (state, action) => {
            const { index } = action.payload;
            state.splice(index, 1);
            saveCartToLocalStorage(state);
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer