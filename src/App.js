import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalInfoForm from './components/PersonalInfoForm';
import DisplayInfo from './components/DisplayInfo';
import HealthInfoForm from './components/HealthInfoForm';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<PersonalInfoForm />} />
      <Route path="/health-info" element={<HealthInfoForm />} />
      <Route path="/display" element={<DisplayInfo />} />
      </Routes>
    </Router>
  );
}

export default App;