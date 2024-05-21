import { useEffect, useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";
import useFetch from "../hooks/useFetch";
import { PlanetResponse } from "../types/planet.type";
import { PeopleResponse } from "../types/people.type";

const PlanetList = () => {
  const { data } = useFetch<PlanetResponse>("https://swapi.dev/api/planets");
  /* const { data: people } = useFetch<PeopleResponse>(
    "https://swapi.dev/api/people"
  );*/

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
