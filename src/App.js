// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PersonalInfoForm from './components/PersonalInfoForm';
import HealthInfoForm from './components/HealthInfoForm';
import DisplayInfo from './components/DisplayInfo';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    JSON.parse(localStorage.getItem('authenticatedUser')) || null
  );

  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem('registeredUser')) || null
  );

  const handleLogin = (userData) => {
    setAuthenticatedUser(userData);
  };

  const handleRegister = (userData) => {
    setRegisteredUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('authenticatedUser');
    setAuthenticatedUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            authenticatedUser ? (
              <DisplayInfo userData={authenticatedUser} onLogout={handleLogout} />
            ) : (
              <>
                <h1>My Health Journal</h1>
                <LoginForm onLogin={handleLogin} />
                <RegistrationForm onRegister={handleRegister} />
              </>
            )
          }
        />
        <Route path="/personal-info" element={<PersonalInfoForm />} />
        <Route path="/health-info" element={<HealthInfoForm />} />
        <Route path="/display" element={<DisplayInfo userData={registeredUser} onLogout={handleLogout} />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;