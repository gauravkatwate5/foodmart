import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addTocart: (state, action) => {
      const existingdata = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingdata) {
        state.cart.map((item) => {
          item.id === action.payload.id ? item.qty++ : item;
        });
      } else {
        state.cart.push(action.payload);
      }
    },
    removefromcart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementqty: (state, action) => {
      state.cart.map((item) => {
        item.id === action.payload.id ? item.qty++ : item;
      });
    },
    decrementqty: (state, action) => {
      state.cart.map((item) => {
        item.id === action.payload.id ? item.qty-- : item;
      });
    },
  },
});

export const { addTocart, removefromcart, incrementqty, decrementqty } =
  CartSlice.actions;
export default CartSlice.reducer;
