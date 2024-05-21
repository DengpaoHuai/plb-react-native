import { Text, View } from "react-native";
import { Planet } from "../types/planet.type";
import { useEffect, useState } from "react";

const XmlDemo = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    //xmlhttprequest
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://swapi.dev/api/planets");
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        setPlanets(response.results);
      }
    };
  }, []);

  return (
    <View>
      <Text>This is a demo component</Text>
    </View>
  );
};
