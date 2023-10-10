import React from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar"> {/* Apply the "navbar" class */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Chat-Room">Chat Room</Link>
        </li>
        {/* Add more navigation links for other pages */}
      </ul>
    </nav>
  );
}

export default Navbar;
