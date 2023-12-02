// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simple validation, you might want to improve this
    if (username && password) {
      // Perform user login (for simplicity, we're just using local storage)
      const storedUser = JSON.parse(localStorage.getItem('registeredUser'));
      if (storedUser && storedUser.username === username && storedUser.password === password) {
        const userData = { username };
        localStorage.setItem('authenticatedUser', JSON.stringify(userData));
        onLogin(userData);
        // Redirect to the display-info page after login
        navigate('/display');
      } else {
        alert('Invalid username or password.');
      }
    } else {
      alert('Please enter all fields.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
