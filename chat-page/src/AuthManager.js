import React, { useEffect, useState } from 'react';
import bcrypt from 'bcryptjs';
import socket from './socketConfig';
import { getUserIdFromCookie, setCookie, isLoggedIn } from './cookieManager';
import './AuthManager.css';

const AuthManager = ({ onAuthentication }) => {
  const [user_id, setUser_id] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user_name, setUserName] = useState('');

  useEffect(() => {
    if (isLoggedIn()) {
      getUserIdFromCookie(getUserCookie())
        .then((id) => {
          setUser_id(id);
          onAuthentication(id);
        })
        .catch((error) => {
          console.error('Error getting user ID:', error.message);
        });
    }
  }, [onAuthentication]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    socket.emit('login', { email, password: hashedPassword });

    socket.on('login_success', (data) => {
      const cookie = data.cookie;
      setUser_id(cookie);
      setCookie(cookie, data.expiration); // Save the cookie with an expiration timestamp
      onAuthentication(cookie);
    });

    socket.on('login_error', (errorData) => {
      console.error('Login error:', errorData.error_message);
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    socket.emit('signup', { email, password: hashedPassword, user_name });

    socket.on('signup_success', (data) => {
      const cookie = data.cookie;
      setUser_id(cookie);
      setCookie(cookie, data.expiration); // Save the cookie with an expiration timestamp
      onAuthentication(cookie);
    });

    socket.on('signup_error', (errorData) => {
      console.error('Signup error:', errorData.error_message);
    });
  };

  return (
    <div className="auth-form">
      {user_id ? (
        <p>Logged in as User ID: {user_id}</p>
      ) : (
        <>
          <h2>Login or Sign Up</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              className="auth-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="auth-button">
              Login
            </button>
          </form>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              className="auth-input"
              placeholder="Username"
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              className="auth-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="auth-button">
              Sign Up
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default AuthManager;
