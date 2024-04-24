import React from 'react';
import {useNavigate} from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const handleClick = () => {
    if (token) {
      localStorage.removeItem('token');
      navigate('/');
    }
  };

  return (
    <>
      <h1>Logout</h1>
      {token ? (
        <>
          <p>Logged in</p>
          <button onClick={handleClick}>Logout</button>
        </>
      ) : (
        <p>Not logged in</p>
      )}
    </>
  );
};

export default Logout;
