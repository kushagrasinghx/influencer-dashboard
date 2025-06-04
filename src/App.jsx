import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import AllBrands from './pages/AllBrands';
import CollaborationStatus from './pages/CollaborationStatus';
import Coupon from './pages/Coupon';
import Affiliate from './pages/Affiliate';
import Settings from './pages/Settings';

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  const pageTitles = {
    '/': 'All Brands',
    '/collaboration': 'Collaboration Status',
    '/coupon': 'Coupon',
    '/affiliate': 'Affiliate',
    '/settings': 'Settings',
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Navbar title={pageTitles[location.pathname] || 'Dashboard'} user={user} />
        <div className="page-body">
          <Routes>
            <Route path="/" element={<AllBrands />} />
            <Route path="/collaboration" element={<CollaborationStatus />} />
            <Route path="/coupon" element={<Coupon />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
