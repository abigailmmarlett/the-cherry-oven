import { NavLink } from 'react-router-dom'
import CherryDoodle from './CherryDoodle'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-brand">
          <div className="nav-brand-logo-placeholder">
            <CherryDoodle type="cherries" size={26} />
          </div>
          <div>
            The Cherry Oven
            <span className="small">Richmond, VA</span>
          </div>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>Home</NavLink>
          <NavLink to="/info" className={({ isActive }) => isActive ? 'active' : ''}>How it works</NavLink>
          <NavLink to="/reviews" className={({ isActive }) => isActive ? 'active' : ''}>Reviews</NavLink>
          <NavLink to="/order" className={({ isActive }) => `nav-cta${isActive ? ' active' : ''}`}>Order now</NavLink>
        </div>
      </div>
    </nav>
  )
}
