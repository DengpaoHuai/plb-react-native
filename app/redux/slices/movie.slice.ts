import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../models/Movie";
import { fetchMovies } from "../thunkActions/movies.thunk";

type InitialStateType = {
  movies: Movie[];
  loading: boolean;
  error: null | string;
};

const initialState: InitialStateType = {
  movies: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    /* setAllMovies: (state, action) => {
      state.movies = action.payload;
    },*/
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = "une erreur est survenue";
    });
  },
});

//export const { setAllMovies } = movieSlice.actions;

export default movieSlice.reducer;
