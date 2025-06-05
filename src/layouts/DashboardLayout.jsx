import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': 'All Brands',
  '/collaboration': 'Collaboration',
  '/coupon': 'Coupon',
  '/affiliate': 'Affiliate',
  '/settings': 'Settings',
};

const DashboardLayout = ({ children, user }) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-0 sm:ml-20 bg-[#F9F9F9]">
        <Navbar title={pageTitles[location.pathname] || 'Dashboard'} user={user} />
        <div className="page-body px-4 sm:px-8 pt-4 sm:pt-6 mb-20 sm:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
