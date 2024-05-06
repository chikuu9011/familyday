import React, { useState } from 'react';
import './css/Login.css';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'mobile') setMobile(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/quesions')
    // Prepare data to send to the API

    const data = {
      name: name,
      email: email,
      mobile: mobile
    };
    
    fetch('your-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      // Handle API response here
      console.log('Response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <>
    <Home/>
    <div className='box'>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Name :' className='form-control' value={name} onChange={handleChange} />
          <input type='email' name='email' placeholder='Email :' className='form-control' value={email} onChange={handleChange} />
          <input type='tel' name='mobile' placeholder='Mobile :' className='form-control' value={mobile} onChange={handleChange} />
          <button type='submit' className='sb'>Start</button>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default Login;
