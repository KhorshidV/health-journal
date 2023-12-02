// RegistrationForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = ({ onRegister }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleRegister = () => {
    // Simple validation, you might want to improve this
    if (username && password && repeatPassword) {
      if (password !== repeatPassword) {
        alert('Passwords do not match. Please enter matching passwords.');
      } else {
        // Perform user registration (for simplicity, we're just using local storage)
        const userData = { username, password };
        console.log('User Data:', userData); // Add this line
        localStorage.setItem('registeredUser', JSON.stringify(userData));
        onRegister(userData);
        // Redirect to the personal-info page after registration
        navigate('/personal-info');
      }
    } else {
      alert('Please enter all fields.');
    }
  };


  return (
    <div>
      <h2>Register</h2>
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
      <label>
        Repeat Password:
        <input
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationForm;
