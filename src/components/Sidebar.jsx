import { NavLink } from 'react-router-dom';
import { LayoutGrid, Handshake, Percent, Link2, Settings } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: <LayoutGrid size={20} />, path: '/' },
    { icon: <Handshake size={20} />, path: '/collaboration' },
    { icon: <Percent size={20} />, path: '/coupon' },
    { icon: <Link2 size={20} />, path: '/affiliate' },
    { icon: <Settings size={20} />, path: '/settings' },
  ];

  const baseItemClass =
    'flex items-center justify-center rounded-lg text-[#333] transition-all duration-200';

  const activeClass = 'bg-[#9F1D35] text-white';
  const hoverClass = 'hover:bg-[#fce8ec] hover:text-[#9F1D35]';

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-20 h-screen bg-white border-r border-[#eee] flex-col items-center justify-between py-4 fixed top-0 left-0 z-[1000]">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <div className="w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-4 items-center flex-grow justify-center">
          {menuItems.slice(0, 4).map((item) => (
            <NavLink
              to={item.path}
              key={item.path}
              className={({ isActive }) =>
                `w-[50px] h-[50px] ${baseItemClass} ${hoverClass} ${
                  isActive ? activeClass : ''
                }`
              }
            >
              {item.icon}
            </NavLink>
          ))}
        </div>

        {/* Settings */}
        <div className="flex justify-center items-center">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `w-[50px] h-[50px] ${baseItemClass} ${hoverClass} ${
                isActive ? activeClass : ''
              }`
            }
          >
            <Settings size={20} />
          </NavLink>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[1000] bg-white border-t border-[#eee] w-full flex">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
              `flex-1 h-[60px] flex items-center justify-center ${
                isActive ? 'text-[#9F1D35]' : 'text-[#333]'
              }`
            }
          >
            {item.icon}
          </NavLink>
        ))}
      </div>
    </>
  );
}
