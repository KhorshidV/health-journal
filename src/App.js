import React, { useState } from 'react';
import ActivityForm from './components/PersonalInfoForm';
import ActivityList from './components/PersonalInfoList';

function App() {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = (userData) => {
    setActivities([...activities, userData]);
  };

  return (
    <div>
      <h1>My Health Tracker</h1>
      <ActivityForm onAddActivity={handleAddActivity} />
      <ActivityList activities={activities} />
    </div>
  );
}

export default App;