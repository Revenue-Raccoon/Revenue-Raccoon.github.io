import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TryComponent from "../components/try.jsx";
// import BeginScreen from "../pages/begin.jsx"
import StorePage from "../pages/StorePage.jsx"
import openLoginOrRegister from "../components/openLoginOrRegister.jsx";
import Register from "../components/register.jsx";
import Login from "../components/Login.jsx";
import ForgotPasswordScreen from '../components/ForgotPassword.jsx'

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} // הסתרת ה-Navigation Bar למסך הזה
        />

      <Stack.Screen 
          name='ForgotPassword'
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
      />
      
      <Stack.Screen 
          name='Register'
          component={Register}
          options={{ headerShown: false }}
      />
      {/* <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{ headerShown: false }} // הסתרת ה-Navigation Bar למסך הזה
        /> */}
{/* 
        <Stack.Screen 
          name="openLoginOrRegister" 
          component={openLoginOrRegister} 
          options={{ headerShown: false }} // הסתרת ה-Navigation Bar למסך הזה
        /> */}
        {/* <Stack.Screen 
          name="Begin" 
          component={BeginScreen} 
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen 
          name="TryComponent" 
          component={TryComponent} 
          options={{ headerShown: false }} // הסתרת ה-Navigation Bar למסך הזה
        /> */}
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
