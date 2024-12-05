import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
  cartData: {
    id: number;
    images: string[];
    category: { name: string };
    title: string;
    price: number;
    description: string;
    quantity?: number;
  }[];
  taxPrice: number;
}

const initialState: InitialStateType = {
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
        (item: { id: number }) => item?.id !== action.payload
      );

      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },

    clearCart(state) {
      state.cartData = [];
      localStorage.removeItem("cartData");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
