import { useState } from 'react'
import { Link } from 'react-router-dom'
import CherryDoodle from '../components/CherryDoodle'

const REVIEWS = [
  {
    stars: 5,
    text: 'A glowing review will live here once it rolls in.',
    reviewer: 'Future customer',
    tag: 'Your order',
    placeholder: true,
  },
  {
    stars: 5,
    text: 'Could it be yours?',
    reviewer: 'Yet to be written',
    tag: 'TBD',
    placeholder: true,
  },
]

const GALLERY = [
  { tone: 'tone-1', doodle: 'cherries' as const, label: 'brown butter choc chip' },
  { tone: 'tone-2', doodle: 'cherry' as const, label: 'strawberry & cream' },
  { tone: 'tone-3', doodle: 'heart' as const, label: 'blueberry lemon cheesecake' },
  { tone: 'tone-4', doodle: 'sparkle' as const, label: 'banana muffin' },
  { tone: 'tone-2', doodle: 'cherries' as const, label: 'sugar cookie bars' },
  { tone: 'tone-1', doodle: 'cherry' as const, label: 'honey butter biscuits' },
  { tone: 'tone-3', doodle: 'heart' as const, label: 'texas sheet cake' },
  { tone: 'tone-4', doodle: 'sparkle' as const, label: 'pickup day' },
]

export default function Reviews() {
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)

  return (
    <main className="page">
      {/* Hero */}
      <section className="rv-hero">
        <span className="badge">
          <CherryDoodle type="heart" size={12} /> Real talk from real customers
        </span>
        <h1>Sweet words from <span className="accent">sweet people</span></h1>
        <p>Some real reviews are still rolling in — Keeley just launched! Until then, here's a peek at what folks have been saying on Instagram and at pickup.</p>
      </section>

      {/* Coming soon */}
      <div className="comingsoon">
        <span className="stamp">soon!</span>
        <h2>Reviews are coming in fresh-baked</h2>
        <p>The Cherry Oven is just getting started. As we collect real reviews, they'll show up here. Want to be one of the first?</p>
        <div style={{ marginTop: 18, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/order" className="btn btn-primary btn-sm">Place an order</Link>
          <a href="https://instagram.com/thecherryoven" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">Follow on IG</a>
        </div>
      </div>

      {/* Reviews */}
      <div className="section-head">
        <span className="section-eyebrow">A few early ones</span>
        <h2>What folks are saying</h2>
      </div>

      <div className="review-grid">
        {REVIEWS.map((r, i) => (
          <div key={i} className={`review-tile${r.placeholder ? ' placeholder' : ''}`}>
            <div className="stars" style={r.placeholder ? { opacity: 0.4 } : undefined}>
              {'★'.repeat(r.stars)}
            </div>
            <p className="review-text" style={r.placeholder ? { opacity: 0.4 } : undefined}>{r.text}</p>
            <div className="review-meta">
              <span className="reviewer" style={r.placeholder ? { opacity: 0.4 } : undefined}>{r.reviewer}</span>
              <span className="order-tag" style={r.placeholder ? { opacity: 0.4 } : undefined}>{r.tag}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <div className="section-head">
        <span className="section-eyebrow">From the IG feed</span>
        <h2>Lately on <span style={{ fontFamily: 'var(--script)', color: 'var(--cherry)', fontSize: '1.3em' }}>@thecherryoven</span></h2>
        <p style={{ marginTop: 10 }}>Once we connect Keeley's Instagram, recent posts will populate here automatically.</p>
      </div>

      <div className="gallery">
        {GALLERY.map((g, i) => (
          <a
            key={i}
            href="https://instagram.com/thecherryoven"
            target="_blank"
            rel="noreferrer"
            className={`gallery-tile ${g.tone}`}
          >
            <div className="placeholder">
              <div style={{ textAlign: 'center' }}>
                <CherryDoodle type={g.doodle} size={44} />
                <div style={{ fontFamily: 'monospace', fontSize: '0.72rem', color: 'var(--cherry)', marginTop: 8 }}>
                  {g.label}
                </div>
              </div>
            </div>
            <span className="label">{g.label}</span>
          </a>
        ))}
      </div>

      <div className="ig-cta">
        <a href="https://instagram.com/thecherryoven" target="_blank" rel="noreferrer" className="btn btn-ghost">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          Follow @thecherryoven
        </a>
      </div>

      {/* Leave a review */}
      <section className="leave-review">
        <span className="section-eyebrow" style={{ color: 'var(--blush)' }}>After your order</span>
        <h2>Already ordered? <span className="script">Leave a sweet word</span></h2>
        <p>If you've had cookies from us, we'd love to hear your honest feedback. Reviews go a long way for a tiny home bakery.</p>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map(n => (
            <button
              key={n}
              aria-label={`${n} star${n > 1 ? 's' : ''}`}
              onClick={() => setRating(n)}
              onMouseEnter={() => setHovered(n)}
              onMouseLeave={() => setHovered(0)}
            >
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 2 L14.5 9 L22 9.3 L16 14 L18 21 L12 17 L6 21 L8 14 L2 9.3 L9.5 9 Z"
                  fill={n <= (hovered || rating) ? '#f6c97a' : 'rgba(253,246,238,0.4)'}
                  stroke="var(--cream)"
                  strokeWidth="1"
                />
              </svg>
            </button>
          ))}
        </div>
        <div style={{ marginTop: 24, position: 'relative', zIndex: 1 }}>
          <a href="https://instagram.com/thecherryoven" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ background: 'var(--cream)', color: 'var(--cherry)' }}>
            DM us on Instagram →
          </a>
        </div>
      </section>
    </main>
  )
}
