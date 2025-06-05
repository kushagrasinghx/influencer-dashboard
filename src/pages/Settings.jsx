import React, { useEffect, useState } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const Settings = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="max-w-xl w-full bg-white rounded-xl shadow-md p-6 font-sans flex flex-col gap-6">
      {/* Profile Info */}
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
        <img
          src={user?.photoURL || '/default-profile.png'}
          alt="Profile"
          className="w-20 h-20 rounded-xl object-cover border border-gray-200"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/default-profile.png';
          }}
        />
        <div className="flex flex-col justify-center">
          <p className="text-lg font-semibold text-[#111]">
            {user?.displayName || 'Guest'}
          </p>
          <p className="text-sm text-gray-600">
            {user?.email || 'guest@example.com'}
          </p>
        </div>
      </div>

      {/* Logout Button */}
      <div>
        <button
          onClick={handleLogout}
          className="bg-[#9F1D35] text-white px-6 py-2 rounded-lg text-sm hover:bg-[#87162d] transition w-full sm:w-auto"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Settings;
