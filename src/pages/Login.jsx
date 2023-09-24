import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('test@gmail.com');
  const [pass, setPass] = useState('qwerty');

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, pass);
    if (email && pass) login(email, pass);
  }

  useEffect(() => {
    // The { replace: true } option in the navigate function is used to replace the current entry in the navigation history with the new one, effectively preventing the user from navigating back to the previous route.
    if (isAuthenticated) navigate('/app', { replace: true });
  }, [isAuthenticated]);

  return (
    <div className="flex flex-col justify-items-center justify-center	bg-yellow-200 h-[80vh]">
      <h1 className="text-center text-[50px]"> This is Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <div className="p-2">
            <label htmlFor="email" className="p-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-2">
            <label htmlFor="pass" className="p-2">
              Pass
            </label>
            <input
              id="pass"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="p-2">
            <button>Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
