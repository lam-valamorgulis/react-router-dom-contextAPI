import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

const FAKE_USER = {
  email: 'test@gmail.com',
  password: 'qwerty',
};

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'logout':
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error('Unknown action');
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, pass) {
    if (email === FAKE_USER.email && pass === FAKE_USER.password)
      dispatch({ type: 'login', payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: 'logout' });
  }

  return (
    <AuthContext.Provider value={{ login, logout, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// custom hook to return a context object (value state from AuthContext.Provider)
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('AuthContext was used outside AuthProvider');
  return context;
}

export { useAuth, AuthProvider };
