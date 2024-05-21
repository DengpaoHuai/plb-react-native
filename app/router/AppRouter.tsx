import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CounterView from "../views/CounterView";
import PlanetList from "../views/PlanetList";

const Stack = createNativeStackNavigator();

function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={CounterView} />
        <Stack.Screen name="Planets" component={PlanetList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
