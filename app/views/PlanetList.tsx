import { FlatList, Text, View } from "react-native";
import useFetch from "../hooks/useFetch";
import { PlanetResponse } from "../types/planet.type";

const PlanetList = () => {
  const { data } = useFetch<PlanetResponse>("https://swapi.dev/api/planets");

  return (
    <View>
      <FlatList
        data={data?.results}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      ></FlatList>
    </View>
  );
};

export default PlanetList;
