import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TryComponent from "../components/try.jsx";
// import BeginScreen from "../pages/begin.jsx"
import StorePage from "../pages/StorePage.jsx"
import LoginPage from "../components/loginPage.jsx";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="hh" 
          component={LoginPage} 
          options={{ headerShown: false }} // הסתרת ה-Navigation Bar למסך הזה
        />
        {/* <Stack.Screen 
          name="Begin" 
          component={BeginScreen} 
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen 
          name="TryComponent" 
          component={TryComponent} 
          options={{ headerShown: false }} // הסתרת ה-Navigation Bar למסך הזה
        />
        {/* <Stack.Screen 
          name="Store page" 
          component={StorePage} 
          options={{ headerShown: false }} 
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
