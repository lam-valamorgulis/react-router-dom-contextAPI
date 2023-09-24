import React from 'react';
import { useAuth } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate('/');
  }

  return (
    <div className="text-center p-10 bg-red-100">
      <h1>hello, {user?.email}</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
