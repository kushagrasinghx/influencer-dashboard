import { Routes, Route } from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout';
import AllBrands from './pages/AllBrands';
import BrandCollaborate from './pages/BrandCollaborate';
import CollaborationStatus from './pages/CollaborationStatus';
import Coupon from './pages/Coupon';
import Affiliate from './pages/Affiliate';
import Settings from './pages/Settings';

function App() {
  // Mock user object for now
  const mockUser = {
    displayName: 'Demo User',
    email: 'demo@example.com',
    photoURL: '/default-profile.png'
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout user={mockUser}>
              <AllBrands />
            </DashboardLayout>
          }
        />
        <Route
          path="/brand/:brandName"
          element={
            <DashboardLayout user={mockUser}>
              <BrandCollaborate />
            </DashboardLayout>
          }
        />
        <Route
          path="/collaboration"
          element={
            <DashboardLayout user={mockUser}>
              <CollaborationStatus />
            </DashboardLayout>
          }
        />
        <Route
          path="/coupon"
          element={
            <DashboardLayout user={mockUser}>
              <Coupon />
            </DashboardLayout>
          }
        />
        <Route
          path="/affiliate"
          element={
            <DashboardLayout user={mockUser}>
              <Affiliate />
            </DashboardLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <DashboardLayout user={mockUser}>
              <Settings />
            </DashboardLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;