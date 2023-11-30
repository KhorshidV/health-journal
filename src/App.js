import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalInfoForm from './components/PersonalInfoForm';
import DisplayInfo from './components/DisplayInfo';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<PersonalInfoForm />} />
      <Route path="/display" element={<DisplayInfo />} />
      </Routes>
    </Router>
  );
}

export default App;