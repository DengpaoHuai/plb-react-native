import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  await sleep(2000);
  const response = await fetch(
    "https://crudcrud.com/api/5ba6e7418a7f46318fbf0bf76ec505d1/movies"
  );
  return response.json();
});

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
