import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native";
import DemoComponent from "../components/DemoComponent";
import { useNavigation } from "@react-navigation/native";
//HOC : High order component
const CounterView = () => {
  const [count, setCount] = useState(0);
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

  return (
    <>
      <Button
        title="go to planets"
        onPress={() => navigate.navigate("Planets")}
      />
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <DemoComponent></DemoComponent>
    </>
  );
};

export default CounterView;
