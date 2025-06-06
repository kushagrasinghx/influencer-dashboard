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
      <div className="h-screen flex flex-col justify-center items-center bg-[#f3f5f9] font-[Segoe UI] text-[1.1rem] text-[#333]">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-[#9F1D35] rounded-full animate-spin mb-4" />
        <p><strong>Loading your Dashboard!</strong></p>
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
