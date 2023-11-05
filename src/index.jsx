import React from 'react';
import ReactDOM from 'react-dom/client'; // Corrected import statement
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './components/UserContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
          <App />
      </UserProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
