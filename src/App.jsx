import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import AllBrands from './pages/AllBrands';
import CollaborationStatus from './pages/CollaborationStatus';
import Coupon from './pages/Coupon';
import Affiliate from './pages/Affiliate';
import Settings from './pages/Settings';

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner" />
        <p>Please wait a moment while we sign you in!</p>
      </div>
    );
  }

  if (!user && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  if (user && location.pathname === '/login') {
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {user && (
        <>
          <Route
            path="/"
            element={
              <DashboardLayout user={user}>
                <AllBrands />
              </DashboardLayout>
            }
          />
          <Route
            path="/collaboration"
            element={
              <DashboardLayout user={user}>
                <CollaborationStatus />
              </DashboardLayout>
            }
          />
          <Route
            path="/coupon"
            element={
              <DashboardLayout user={user}>
                <Coupon />
              </DashboardLayout>
            }
          />
          <Route
            path="/affiliate"
            element={
              <DashboardLayout user={user}>
                <Affiliate />
              </DashboardLayout>
            }
          />
          <Route
            path="/settings"
            element={
              <DashboardLayout user={user}>
                <Settings />
              </DashboardLayout>
            }
          />
        </>
      )}
    </Routes>
  );
}

export default App;
