import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FirebaseAuth from "../pages/FirebaseAuth.jsx";
import TryComponent from "../components/try.jsx";
import ChatRoom from "../pages/ChatRoom";
import Begin from "../pages/begin";
import StorePage from "../pages/StorePage";
import Logout from "../pages/logout";
import Profile from "../pages/profile_page.jsx"; // Import the Profile component

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TryComponent" component={TryComponent} />
        <Stack.Screen name="Login" component={FirebaseAuth} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
        <Stack.Screen name="Begin" component={Begin} />
        <Stack.Screen name="StorePage" component={StorePage} />
        <Stack.Screen name="Logout" component={Logout} />
        <Stack.Screen name="ProfilePage" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
