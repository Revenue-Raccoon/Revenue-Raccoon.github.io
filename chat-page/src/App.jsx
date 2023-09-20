import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ChatRoom from './ChatRoom';
import AuthManager from './AuthManager';

function App() {
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  const checkAuthorization = () => {
    // Implement your logic to check if the user is authorized
    // For example, you can check if the user is logged in
    // and set setIsAuthorized(true) if they are.
  };

  React.useEffect(() => {
    checkAuthorization();
  }, []);

  return (
    <Router>
      <Route exact path="/auth">
        <AuthManager />
      </Route>
      <Route exact path="/chatroom">
        {isAuthorized ? (
          <ChatRoom />
        ) : (
          <Redirect to="/auth" />
        )}
      </Route>
    </Router>
  );
}

export default App;
