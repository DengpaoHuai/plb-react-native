import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native";
import DemoComponent from "../components/DemoComponent";
import { useNavigation } from "@react-navigation/native";
//HOC : High order component
const CounterView = () => {
  const [count, setCount] = useState(0);

  let count1 = 0;

  const navigate = useNavigation();
  useEffect(() => {
    console.log(count);
    //cleanup
    return () => {
      console.log("CounterView unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("count changed");
  }, [count]);

  function demo() {
    console.log(count1);
  }

  return (
    <>
      <Text>{count1}</Text>
      <Button
        title="second compteur"
        onPress={() => {
          count1++;
          console.log(count1);
        }}
      />
      <Button
        title="go to planets"
        onPress={() => navigate.navigate("Planets")}
      />
      <Button
        title="ListMovies"
        onPress={() => navigate.navigate("ListMovies")}
      />
      <Button
        title="go to create movie"
        onPress={() => navigate.navigate("CreateMovie")}
      />
      <Text>{count}</Text>

      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <DemoComponent></DemoComponent>
      <Button title="test" onPress={demo} />
    </>
  );
};

export default CounterView;
