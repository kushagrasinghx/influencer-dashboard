import './Navbar.css'
import { Bell } from 'lucide-react'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

export default function Navbar({ title }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log('Firebase user:', currentUser) // Debug: log user object
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className="navbar">
      <h2 className="navbar-title">{title}</h2>
      <div className="navbar-profile">
        <div className="notification-icon">
          <Bell size={20} color="#9F1D35" />
        </div>
        <img
          src={user?.photoURL || '/default-profile.png'}
          alt="Profile"
          className="profile-pic"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = '/default-profile.png'
          }}
        />
        <div className="user-info">
          <p className="user-name">{user?.displayName || 'Guest'}</p>
          <p className="user-email">{user?.email || 'guest@example.com'}</p>
        </div>
      </div>
    </div>
  )
}
