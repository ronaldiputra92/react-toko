import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [], //untuk menampung data
  },
  reducers: {
    addToCart: (state, action) => {
      //untuk pengecekan agar ketika di input qty yang bertambah
      const itemCart = state.data.find((item) => item.id === action.payload.id);
      if (itemCart) {
        itemCart.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
