import { useEffect } from "react";
import { Text, View } from "react-native";

const DemoComponent = () => {
  useEffect(() => {
    console.log("Demo Component mounted");
  }, []);

  return (
    <View>
      <Text>This is a demo component</Text>
    </View>
  );
};

export default DemoComponent;
