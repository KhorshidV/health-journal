import React from 'react';
import { useLocation } from 'react-router-dom';


const DisplayInfo = () => {
    const location = useLocation();
    const userData = location.state?.userData || JSON.parse(localStorage.getItem('userData')) || {};

    if (!userData) {
        return <div>No data to display.</div>;
    }
    return (
    <div>
      <h2>Entered Information</h2>
      <p>
        <strong>First Name:</strong> {userData.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {userData.lastName}
      </p>
      <p>
        <strong>Age:</strong> {userData.age}
      </p>
      <p>
        <strong>Gender:</strong> {userData.gender}
      </p>
      <p>
        <strong>Exercise:</strong> {userData.exercise}
      </p>
      <p>
        <strong>Water:</strong> {userData.water}
      </p>
    </div>
  );
};

export default DisplayInfo;