import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirebaseAuth from '/src/pages/FirebaseAuth';
import TryComponent from '/src/components/try.jsx';
import ChatRoom from '/src/pages/ChatRoom';
import Begin from '/src/pages/begin';
import StorePage from '/src/pages/StorePage';
import Logout from '../pages/logout';
import Profile from '/src/pages/profile_page.jsx'; // Import the Profile component

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Login" component={FirebaseAuth} />
        <Stack.Screen name="TryComponent" component={TryComponent} />
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
