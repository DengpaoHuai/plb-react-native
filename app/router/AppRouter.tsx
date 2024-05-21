import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CounterView from "../views/CounterView";
import PlanetList from "../views/PlanetList";
import CreateMovieView from "../views/CreateMovieView";
import ListMoviesView from "../views/ListMoviesView";

const Stack = createNativeStackNavigator();

function AppRouter(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={CounterView} />
        <Stack.Screen name="Planets" component={PlanetList} />
        <Stack.Screen name="CreateMovie" component={CreateMovieView} />
        <Stack.Screen name="ListMovies" component={ListMoviesView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
