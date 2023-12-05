import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TryComponent from "../components/try.jsx";
import BeginScreen from "../pages/begin.jsx"
import StorePage from "../pages/StorePage.jsx"

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TryComponent" component={TryComponent} />
        <Stack.Screen name="Begin" component={BeginScreen} />
        <Stack.Screen name="Stroe page" component={StorePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
