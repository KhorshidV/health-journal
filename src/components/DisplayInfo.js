import React from 'react';

const DisplayInfo = ({ userData, onLogout }) => {
  console.log('DisplayInfo userData:', userData);

  const handleLogout = () => {
    if (typeof onLogout === 'function') {
      onLogout();
    }
  };

  return (
    <div>
      <h2>Display Info</h2>
      {userData ? (
        <div>
            <p>User Information:</p>
            <p><strong>First Name:</strong> {userData.username}</p>
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
      ) : (
        <p>No data to display</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DisplayInfo;