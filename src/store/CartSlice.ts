import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: JSON.parse(localStorage.getItem("cartData") as string) || [],
  taxPrice: 3,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartData.push(action.payload);
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
    removeFromCart(state, action) {
      state.cartData = state.cartData.filter(
        (item: number) => item?.id !== action.payload
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
