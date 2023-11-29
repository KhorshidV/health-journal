import React from 'react';

const ActivityList = ({ activities }) => {
  return (
    <div>
      {activities.map((userData, index) => (
        <div key={index}>
          <p>
            <strong>Name:</strong> {userData.firstName} {userData.lastName}
          </p>
          <p>
            <strong>Age:</strong> {userData.age}
          </p>
          <p>
            <strong>Gender:</strong> {userData.gender}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ActivityList;