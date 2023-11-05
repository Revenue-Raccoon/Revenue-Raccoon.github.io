import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Change 'Routes' to 'Switch'
import Navbar from '/src/components/Navbar.jsx';
import socket from '/src/functions/socketConfig.js'

// Import the FirebaseAuth component without curly braces
import FirebaseAuth from './pages/FirebaseAuth';

import TryComponent from '/src/components/try.jsx';

// Import other pages
import ChatRoom from './pages/ChatRoom';
import Begin from './pages/begin';
import { UserProvider } from '/src/components/UserContext.jsx';
import { useHistory } from 'react-router-dom';

import StorePage from './pages/StorePage';


function App() {
  const history = useHistory();


  return (
      <Router>
        <UserProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Begin} />
          <Route path="/chat-room" component={ChatRoom} />
          <Route path="/login" component={FirebaseAuth} />
          <Route path="/try" component={TryComponent} />
          <Route exact path="/main" component={StorePage} />
        </Switch>
        </UserProvider>
      </Router>
  );
}  

export default App;
