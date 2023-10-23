import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Change 'Routes' to 'Switch'
import Navbar from '/src/components/Navbar.jsx';
import socket from '/src/functions/socketConfig.js'

// Import the FirebaseAuth component without curly braces
import FirebaseAuth from './pages/FirebaseAuth';

// Import other pages
import ChatRoom from './pages/ChatRoom';
import Begin from './pages/begin';
import { UserProvider } from '/src/components/UserContext.jsx';

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <Navbar />
          <Switch> {/* Change 'Routes' to 'Switch' */}
            <Route path="/" element={<Begin />} />
            <Route path="/Chat-Room" element={<ChatRoom socket={socket} />} />
            {/* Route for Firebase Authentication */}
            <Route path="/login" element={<FirebaseAuth />} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
