import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movie.slice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
