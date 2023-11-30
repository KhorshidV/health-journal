import React from 'react';

const DisplayInfo = ({ location }) => {
  // Check if location and location.state are defined
  if (!location || !location.state || !location.state.userData) {
    return <div>No data to display.</div>;
  }

  const userData = location.state.userData;

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
    </div>
  );
};

export default DisplayInfo;