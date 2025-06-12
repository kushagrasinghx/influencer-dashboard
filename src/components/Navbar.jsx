import { Bell } from 'lucide-react';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export default function Navbar({ title }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full h-20 flex items-center justify-between px-4 sm:px-8 bg-white border-b border-[#eaeaea]">
      <div className="flex items-center gap-3">
        {/* Mobile-only Logo */}
        <div className="block sm:hidden w-10 h-10 rounded-full overflow-hidden">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <h2 className="text-lg sm:text-[1.5rem] font-semibold text-[#111] font-dm-sans">
          {title}
        </h2>
      </div>

      <div className="flex items-center gap-2">
        <div className="bg-[#fce8ec] p-[10px] rounded-[10px] flex items-center justify-center">
          <Bell size={20} color="#9F1D35" />
        </div>
        <img
          src={user?.photoURL || '/default-profile.png'}
          alt="Profile"
          className="w-10 h-10 rounded-[12px] object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/default-profile.png';
          }}
        />
      </div>
    </div>
  );
}
