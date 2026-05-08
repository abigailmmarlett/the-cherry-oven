import { Link } from 'react-router-dom'
import CherryDoodle from './CherryDoodle'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <CherryDoodle type="cherries" size={32} />
            <strong style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem' }}>The Cherry Oven</strong>
          </div>
          <p>Small-batch cookies from a tiny home kitchen in Richmond, VA. Baked with brown butter and a lot of love.</p>
        </div>
        <div>
          <h4>Navigate</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/info">How it works</Link></li>
            <li><Link to="/order">Place an order</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </ul>
        </div>
        <div>
          <h4>Find us</h4>
          <ul>
            <li><a href="https://instagram.com/thecherryoven" target="_blank" rel="noreferrer">@thecherryoven on IG</a></li>
            <li><a href="https://instagram.com/thecherryoven" target="_blank" rel="noreferrer">DM us on Instagram</a></li>
            <li style={{ color: 'var(--cocoa-soft)', fontSize: '0.9rem' }}>Church Hill, Richmond VA</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} The Cherry Oven · All rights reserved</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          Made with brown butter <CherryDoodle type="heart" size={14} />
        </span>
      </div>
    </footer>
  )
}
