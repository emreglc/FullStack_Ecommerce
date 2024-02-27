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
            const { name, price, id } = action.payload;

            // Check if item is in the cart
            const itemIndex = state.findIndex(item => item.id === id);

            if (itemIndex !== -1) {
                // Item is in the cart
                const newState = state.map((item, i) =>
                    i === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
                );

                // Save the updated cart to local storage
                saveCartToLocalStorage(newState);

                // Return the updated state
                return newState;
            }

            // Item is not in the cart, add it to the cart
            const newItem = { name, price, id, quantity: 1 };
            const newState = [...state, newItem];

            // Save the updated cart to local storage
            saveCartToLocalStorage(newState);

            // Return the updated state
            return newState;
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;

            // Check if item is in the cart
            const itemIndex = state.findIndex(item => item.id === id);

            if (itemIndex !== -1) {
                // Item is in the cart
                const newState = state.map((item, i) =>
                    i === itemIndex
                        ? item.quantity === 1
                            ? null // Filter out the item if quantity becomes 0
                            : { ...item, quantity: item.quantity - 1 }
                        : item
                ).filter(Boolean); // Remove null entries

                // Save the updated cart to local storage
                saveCartToLocalStorage(newState);

                // Return the updated state
                return newState;
            }

            // Item is not in the cart, return the original state
            return state;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer