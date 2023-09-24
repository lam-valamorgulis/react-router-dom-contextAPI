import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/userContext';

import LoadingFullPage from './components/LoadingFullPage';
import AppLayout from './pages/AppLayout';
import AllTasks from './components/AllTasks';

// use lazay To defer loading this component’s code until it’s rendered for the first time, replace this import with:
const WrapperLayout = lazy(() => import('./pages/WrapperLayout'));
const Homepage = lazy(() => import('./pages/Homepage'));
const Nav1 = lazy(() => import('./pages/Nav1'));
const Nav2 = lazy(() => import('./pages/Nav2'));
const Login = lazy(() => import('./pages/Login'));
const ProtectedRoute = lazy(() => import('./pages/ProtectedRoute'));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* lets you display a fallback until its children have finished loading. */}
        <Suspense fallback={<LoadingFullPage />}>
          <Routes>
            <Route path="/" element={<WrapperLayout />}>
              <Route index element={<Homepage />} />
              <Route path="/nav1" element={<Nav1 />} />
              <Route path="/nav2" element={<Nav2 />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="alltasks" />} />
              <Route path="alltasks" element={<AllTasks />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
