import { NavLink } from 'react-router-dom'
import './Header.css'

const navItems = [
  { path: '/', label: 'home' },
  { path: '/about', label: 'about' },
  { path: '/work', label: 'work' },
  { path: '/gear', label: 'gear' },
  { path: '/gallery', label: 'gallery' },
  { path: '/contact', label: 'contact' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <ul className="header__nav-list">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                  }
                  end={path === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
