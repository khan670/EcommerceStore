import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: JSON.parse(localStorage.getItem("cartData") as string) || [],
  totalPrice: 0,
  taxPrice: 3,
  totalPriceWithTax: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartData.push(action.payload);
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
      state.totalPrice = state.cartData.reduce(
        (total: number, item: number) => total + item?.price,
        0
      );
      state.totalPriceWithTax = Number(
        state.totalPrice * (1 + state.taxPrice / 100)
      );
    },
    removeFromCart(state, action) {
      state.cartData = state.cartData.filter(
        (item: number) => item?.id !== action.payload
      );
      const currectPrice = state.cartData.find(
        (item: number) => item?.id === action.payload
      )?.price;
      state.totalPrice = Number(state.totalPrice - currectPrice);
      state.totalPriceWithTax = Number(
        state.totalPrice * (1 + state.taxPrice / 100)
      );
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },

    clearCart(state) {
      state.cartData = [];
      state.totalPrice = 0;
      state.totalPriceWithTax = 0;
      localStorage.removeItem("cartData");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
