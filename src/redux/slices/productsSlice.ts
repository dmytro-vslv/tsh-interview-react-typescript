import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";

export interface IProduct {
  id: number;
  active: boolean;
  promo: boolean;
  image: string;
  name: string;
  description: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

type queryParameters = {
  limit: string;
  page: string;
  search?: string;
  active?: string;
  promo?: string;
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
  async (queryParameters: queryParameters) => {
    const queryString = new URLSearchParams(queryParameters).toString();
    const response = await axios(`${API_URL}${queryString}`);
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
