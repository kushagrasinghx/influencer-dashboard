import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': 'All Brands',
  '/collaboration': 'Collaboration Status',
  '/coupon': 'Coupon',
  '/affiliate': 'Affiliate',
  '/settings': 'Settings',
};

const DashboardLayout = ({ children, user }) => {
  const location = useLocation();

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Navbar title={pageTitles[location.pathname] || 'Dashboard'} user={user} />
        <div className="page-body">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
