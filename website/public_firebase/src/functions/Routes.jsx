import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '/src/components/Navbar.jsx';
import socket from '/src/functions/socketConfig.js';
import FirebaseAuth from '/src/pages/FirebaseAuth';
import TryComponent from '/src/components/try.jsx';
import ChatRoom from '/src/pages/ChatRoom';
import Begin from '/src/pages/begin';
import StorePage from '/src/pages/StorePage';
import Logout from '../pages/logout';
import Profile from '/src/pages/profile_page.jsx'; // Import the Profile component


const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Begin} />
        <Route
          path="/chat-room"
          render={(props) => <ChatRoom {...props} socket={socket} />}
        />
        <Route path="/login" component={FirebaseAuth} />
        <Route path="/try" component={TryComponent} />
        <Route exact path="/main" component={StorePage} />
        <Route exact path="/logout" component={Logout} />
        <Route path="/profile" component={Profile} /> {/* Add the Profile route */}
      </Switch>
    </div>
  );
};

export default Routes;
