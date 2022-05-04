import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store/store";

type ProductState = {
  search: string;
  active: boolean;
  promo: boolean;
};

const initialState: ProductState = {
  search: "",
  active: false,
  promo: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },

    toggleActive: (state) => {
      state.active = !state.active;
    },

    togglePromo: (state) => {
      state.promo = !state.promo;
    },
  },
});

export const { setSearch, toggleActive, togglePromo } = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;
