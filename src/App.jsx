import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '/src/components/Navbar.jsx';
import socket from '/src/functions/socketConfig.js'

// Import the FirebaseAuth component
import {FirebaseAuth} from './pages/FirebaseAuth';

// Import other pages
import ChatRoom from './pages/ChatRoom';
import Begin from './pages/begin';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
            <Navbar />
          <Routes>
            <Route path="/" element={<Begin />} />
            <Route path="/Chat-Room" element={<ChatRoom socket={socket} />} />
            {/* Route for Firebase Authentication */}
            <Route path="/login" element={<FirebaseAuth />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
