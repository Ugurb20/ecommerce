import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartIsVisible: false,
    cart: [],
    cartIsFull: false,
    cartTotal: 0,
    addedToCart: false,
    changeCartColor: false,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible; ///can muteate state
    },
    addToCart(state, action) {
      if (state.cart.length < 1) {
        state.changeCartColor = true;
      }
      if (state.cart.length < 10) {
        state.cart = [...state.cart, action.payload];

        state.cartTotal += Number(action.payload.price.split("$")[0]);
      } else {
        state.cartIsFull = true;
      }
    },
    clearCartState(state) {
      state.cartIsFull = false;
    },
    removeFromCart(state, action) {
      state.cartTotal -= state.cart[action.payload].price.split("$")[0];
      if (action.payload === 0) {
        state.cart.shift();
      }
      state.cart.splice(action.payload, action.payload);
      if (state.cart.length < 1) {
        state.changeCartColor = false;
      }
    },
    toggleAddedToCart(state) {
      if (state.cart.length < 11) {
        state.addedToCart = !state.addedToCart;
      } else {
        state.addedToCart = false;
      }
    },
  },
});

export const CartActions = cartSlice.actions;

export default cartSlice;
