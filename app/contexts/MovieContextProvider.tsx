import { createContext, useEffect, useState } from "react";
import { Movie } from "../models/Movie";

type MovieContextType = {
  movies: Movie[];
  addMovie: (movie: Omit<Movie, "_id | createdAt">) => void;
};

export const MovieContext = createContext<MovieContextType>(
  {} as MovieContextType
);

const MovieContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/5ba6e7418a7f46318fbf0bf76ec505d1/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const addMovie = (movie: Omit<Movie, "_id | createdAt">) => {
    fetch("https://crudcrud.com/api/5ba6e7418a7f46318fbf0bf76ec505d1/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies([...movies, data]);
      });
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
