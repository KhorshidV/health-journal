import React, {useState} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const HealthInfoForm = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const userData = location.state?.userData || {};

    const [healthData, setHealthData] = useState({
      water:'',
      exercise:'',
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const userDataWithHealth = { ...userData, ...healthData };
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