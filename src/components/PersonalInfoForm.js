import React, { useState } from 'react';
import ActivityFormStyle from '../styles/ActivityForm.module.css';

const ActivityForm = ({ onAddActivity }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      age,
      gender,
    };
    onAddActivity(userData);
    setFirstName('');
    setLastName('');
    setAge('');
    setGender('');
  };

  return (
    <div className='form-container'>
        <form className={ActivityFormStyle.form} onSubmit={handleSubmit}>
       
        <label>
            <p>
            First Name:
            </p>
            <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            />
        </label>
        <label>
            <p>
            Last Name:
            </p> 
            <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            />
        </label>
        <label>
            <p>
            Age:
            </p>
            <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)} 
            required
            />
        </label>
        <label>
            <p>
            Gender:
            </p>
            <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
        </label>
        <div className="button-container">
          <button type="submit">Add Activity</button>
        </div>
        </form>
    </div>
  );
};

export default ActivityForm;