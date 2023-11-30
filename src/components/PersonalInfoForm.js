import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalInfoFormStyle from '../styles/PersonalInfoForm.module.css'

const PersonalInfoForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/health-info', { state: { userData } });
  };

  return (
    <form className= {PersonalInfoFormStyle} onSubmit={handleSubmit}>
      <label>
        <p>
        First Name:
        </p>
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <p>
        Last Name:
        </p>
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <p>
        Age:
        </p>
        <input
          type="number"
          name="age"
          value={userData.age}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <p>
        Gender:
        </p>
        <input
          type="text"
          name="gender"
          value={userData.gender}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Continue</button>
    </form>
  );
};

export default PersonalInfoForm;





