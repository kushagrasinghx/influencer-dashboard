import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Settings = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <p>Update your settings here.</p>
      <button onClick={handleLogout} style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#9F1D35', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Logout
      </button>
    </div>
  );
};

export default Settings;
