import { Button, FlatList, Text, View } from "react-native";
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContextProvider";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { fetchMovies } from "../redux/thunkActions/movies.thunk";

const ListMoviesView = () => {
  const { movies, loading, error } = useSelector(
    (state: RootState) => state.movie
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <View>
      <Text>Movie List</Text>
      <Button
        title="Add Movie"
        /*  onPress={() =>
          addMovie({
            title: "New Movie",
            description: "dpfiogjdiof",
          })
        }*/
      />
      {loading && <Text>Loading...</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      ></FlatList>
    </View>
  );
};

export default ListMoviesView;
