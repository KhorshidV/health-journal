import React from 'react';

const DisplayInfo = ({ location }) => {
  const userData = location.state?.userData; // Use optional chaining to avoid errors

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
        <strong>Activity:</strong> {userData.activity}
      </p>
    </div>
  );
};

export default DisplayInfo;