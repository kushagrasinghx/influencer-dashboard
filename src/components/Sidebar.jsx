import { NavLink } from 'react-router-dom'
import { LayoutGrid, Handshake, Percent, Link2, Settings } from 'lucide-react'
import './Sidebar.css'

export default function Sidebar() {
  const menuItems = [
    { icon: <LayoutGrid size={20} />, path: '/' },
    { icon: <Handshake size={20} />, path: '/collaboration' },
    { icon: <Percent size={20} />, path: '/coupon' },
    { icon: <Link2 size={20} />, path: '/affiliate' }
  ]

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-circle">
          <img src="/logo.png" alt="Logo" />
        </div>
      </div>
      <div className="menu">
        {menuItems.map(item => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
              isActive ? 'menu-item active' : 'menu-item'
            }
          >
            {item.icon}
          </NavLink>
        ))}
      </div>
      <div className="bottom">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? 'menu-item active' : 'menu-item'
          }
        >
          <Settings size={20} />
        </NavLink>
      </div>
    </div>
  )
}
