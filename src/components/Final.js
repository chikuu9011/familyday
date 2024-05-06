import React, { useState, useEffect } from 'react';
import './css/Final.css';

const Final = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Function to read cookie by name
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };

    // Get the score from the cookie
    const savedScore = getCookie('score');
    if (savedScore) {
      setScore(savedScore);
    }
  }, []);

  return (
    <div>
      <div className='final'>
        <div className='text'>
          <h2 className='ft1'>Congratulations!<br />
            <span className='ft'>your Family Happiness</span><br />
            <span className='df1'>score </span>is</h2>
        </div>
        <div className='score'>{score}/10</div>
        <div className='fimg'></div>
        <div className='text'>
          <h2 className='ft'>Keep the smiles on their faces with
            life insurance from ABSLI.</h2>
        </div>
        <div className='finalb'>
          <button className='fb'>Print to Frame</button>
        </div>
      </div>
    </div>
  );
}

export default Final;
