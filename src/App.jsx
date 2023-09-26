import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// importing pages
import ChatRoom from './pages/ChatRoom';
import Begin from './pages/begin';

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
      <Switch>
        <Route path="/Chat-Room" exact component={ChatRoom} />
        <Route path="/" component={Begin} />
      </Switch>
    </Router>
  );
}

export default App;
