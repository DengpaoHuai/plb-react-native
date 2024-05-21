import { create } from "zustand";
import { useEffect } from "react";
import { useQuery } from "@realm/react";
import { Movie } from "../models/Movie";
import { Movie as MovieSchema } from "../models/Movie";
import useFetch from "../hooks/useFetch";
type MoviesStore = {
  movies: Movie[];
  setAllMovies: (movies: Movie[]) => Promise<void>;
  addMovie: (movie: Movie) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const useMoviesStore = create<MoviesStore>((set) => ({
  movies: [],
  loading: false,
  setAllMovies: async (movies: Movie[]) => {
    set({ movies: movies });
  },
  setLoading: (loading: boolean) => {
    set({ loading: loading });
  },
  addMovie: (movie: Movie) =>
    set((state) => ({
      movies: [...state.movies, movie],
    })),
}));

const useMovies = () => {
  const { movies, setAllMovies, addMovie } = useMoviesStore();
  // const moviesDB = useQuery<Movie>(MovieSchema);
  const { data } = useFetch<Movie[]>(
    "https://crudcrud.com/api/5ba6e7418a7f46318fbf0bf76ec505d1/movies"
  );

  useEffect(() => {
    console.log("moviesDB");

    if (data) {
      setAllMovies(data);
      useMoviesStore.getState().setLoading(false);
    } else {
      useMoviesStore.getState().setLoading(true);
    }
  }, [data]);

  return { movies, addMovie };
};

export default useMovies;
