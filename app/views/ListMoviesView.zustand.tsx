import { FlatList, Text, View } from "react-native";
import useMoviesStore from "../store/useMovies";
import useMovies from "../store/useMovies";
import { useEffect } from "react";

const ListMoviesView = () => {
  const { movies } = useMoviesStore();

  return (
    <View>
      <Text>Movie List</Text>

      <FlatList
        data={movies}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      ></FlatList>
    </View>
  );
};

export default ListMoviesView;
