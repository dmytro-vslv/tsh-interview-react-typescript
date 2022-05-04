import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";

export type IProduct = {
  id: number;
  active: boolean;
  promo: boolean;
  image: string;
  name: string;
  description: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
};

type ProductState = {
  status: "idle" | "loading" | "failed";
  items: IProduct[];
};

const initialState: ProductState = {
  status: "loading",
  items: [],
};

const API_URL = process.env.REACT_APP_API_URL;

export const asyncGetItems = createAsyncThunk(
  "products/asyncGetItems",
  async () => {
    const response = await axios(API_URL);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncGetItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncGetItems.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.items = payload.items;
      })
      .addCase(asyncGetItems.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
