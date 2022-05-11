import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "api/api";
import { RootState } from "../store/store";

export type StatusType = "idle" | "loading" | "failed";

export interface IProduct {
  id: number;
  active: boolean;
  promo: boolean;
  image: string;
  name: string;
  description: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

export type queryParameters = {
  limit: string;
  page: string;
  search?: string;
  active?: string;
  promo?: string;
};

type ProductState = {
  status: StatusType;
  items: IProduct[];
  meta: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
};

const initialState: ProductState = {
  status: "loading",
  items: [],
  meta: {
    currentPage: 0,
    itemCount: 0,
    itemsPerPage: 0,
    totalItems: 0,
    totalPages: 0,
  },
};

export const asyncGetItems = createAsyncThunk(
  "products/asyncGetItems",
  async (queryParameters: queryParameters) => {
    const data = await fetchData(queryParameters);
    return data;
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
        state.meta = payload.meta;
      })
      .addCase(asyncGetItems.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
