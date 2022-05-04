import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import filterReducer from "../slices/filterSlice";
import productsReducer from "../slices/productsSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    products: productsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
