import { Button, FlatList, Text, View } from "react-native";
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContextProvider";

const ListMoviesView = () => {
  const { movies, addMovie } = useContext(MovieContext);

  return (
    <View>
      <Text>Movie List</Text>
      <Button
        title="Add Movie"
        onPress={() =>
          addMovie({
            title: "New Movie",
            description: "dpfiogjdiof",
          })
        }
      />
      <FlatList
        data={movies}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      ></FlatList>
    </View>
  );
};

export default ListMoviesView;
