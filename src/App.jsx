  import React from 'react';
  import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
  import Navbar from '/src/components/Navbar.jsx';
  import ErrorBoundary from '/src/functions/ErrorBoundary.jsx';


  // importing pages
  import ChatRoom from './pages/ChatRoom';
  import Begin from './pages/begin';

  function App() {
    return (
      <Router>
        <div>
          <ErrorBoundary>
            <Navbar />
          </ErrorBoundary>
          <Routes>
            <Route path="/" element={<Begin />} />
            <Route path="/Chat-Room" element={<ChatRoom />} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;
