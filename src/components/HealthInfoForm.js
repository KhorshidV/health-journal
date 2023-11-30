import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const HealthInfoForm = () => {

    const navigate = useNavigate();

    const [healthData, setHealthData] = useState({
      water:'',
      exercise:'',
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();

      const userData = JSON.parse(localStorage.getItem('userData')) || {};
      const userDataWithHealth = { ...userData, ...healthData };
      localStorage.setItem('userData', JSON.stringify(userDataWithHealth));

      console.log('user data with health: ', userDataWithHealth);
      navigate('/display', { state: { userData: userDataWithHealth } });
    };

    return (
      <form onSubmit={handleSubmit}>
        <h2>Health Information</h2>
        <label>
          Water:
          <input
            type="text"
            value={healthData.water}
            onChange={(e) => setHealthData({ ...healthData, water: e.target.value })}
          />
        </label>
        <br />
        <label>
          Exercise:
          <input
            type="text"
            value={healthData.exercise}
            onChange={(e) => setHealthData({ ...healthData, exercise: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );

  };

export default HealthInfoForm;