import { Link } from 'react-router-dom'
import CherryDoodle from '../components/CherryDoodle'
import CookieSVG from '../components/CookieSVG'

const FEATURED = [
  {
    id: 'ck1',
    tag: null,
    variant: 'choc' as const,
    name: 'Brown Butter Chocolate Chip',
    desc: 'Toasty brown butter base, big chocolate chips, crispy edge and fudgy middle.',
  },
  {
    id: 'ck2',
    tag: null,
    variant: 'strawberry' as const,
    name: 'Strawberry & Cream',
    desc: 'Fresh strawberry flavor in a soft, creamy cookie.',
  },
  {
    id: 'ck3',
    tag: null,
    variant: 'lemon' as const,
    name: 'Blueberry Lemon Cheesecake',
    desc: 'Bright lemon cookie with blueberry and a cheesecake swirl.',
  },
  {
    id: 'ck4',
    tag: null,
    variant: 'blondie' as const,
    name: 'Banana Muffin',
    desc: 'All the cozy flavors of a banana muffin in cookie form.',
  },
]

const STEPS = [
  { n: '1', title: 'Watch for the drop', body: 'We open ordering twice a month. Follow @thecherryoven on IG for the announcement.' },
  { n: '2', title: 'Build your box', body: 'Choose a box of 4 or 6, mix any flavors freely. Double up for sharing.' },
  { n: '3', title: 'Confirm details', body: 'Pickup or delivery in Richmond, VA. Have an allergy? Tell us.' },
  { n: '4', title: 'Bake & deliver', body: 'We bake fresh the morning of. Cookies arrive warm-ish.' },
]

const MARQUEE_ITEMS = [
  'Brown butter chocolate chip', 'Strawberry & cream', 'Blueberry lemon cheesecake',
  'Banana muffin', 'Sugar cookie bars', 'Honey butter biscuits', 'Texas sheet cake',
]

export default function Home() {
  return (
    <main className="page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-cherries tl float"><CherryDoodle type="cherries" size={80} /></div>
        <div className="hero-cherries tr float-slow"><CherryDoodle type="cherries" size={64} /></div>
        <div className="hero-cherries bl float-slow"><CherryDoodle type="cherry" size={60} /></div>
        <div className="hero-cherries br float"><CherryDoodle type="cherries" size={70} /></div>

        <span className="badge">
          <CherryDoodle type="sparkle" size={12} /> New flavors every month · Richmond, VA
        </span>

        <div className="hero-logo-wrap" style={{ marginTop: 24 }}>
          <div className="ring" />
          <div className="hero-logo-placeholder">
            <CherryDoodle type="cherries" size={120} />
          </div>
        </div>

        <h1>
          Sweet things, <br />
          <span className="accent">baked with love</span>
        </h1>
        <p className="hero-tagline">
          Small-batch cookies and treats from a tiny home kitchen in Richmond, VA.
          Order ahead, pick up fresh — or have us cater your next sweet thing.
        </p>
        <div className="hero-ctas">
          <Link to="/order" className="btn btn-primary">
            Start an order <CherryDoodle type="cherry" size={22} />
          </Link>
          <Link to="/info" className="btn btn-ghost">How it works</Link>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          <span>
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={i}>{item} <CherryDoodle type="heart" size={16} /></span>
            ))}
          </span>
          <span aria-hidden>
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={i}>{item} <CherryDoodle type="heart" size={16} /></span>
            ))}
          </span>
        </div>
      </div>

      {/* Featured cookies */}
      <section className="cookies-section">
        <div className="cookies-header">
          <div>
            <span className="section-eyebrow">This month's menu</span>
            <h2 style={{ marginTop: 6 }}>A little menu, <em>a lot of butter</em></h2>
          </div>
          <Link to="/order" className="btn btn-blush btn-sm">Order now →</Link>
        </div>
        <div className="cookie-grid">
          {FEATURED.map(c => (
            <article className="cookie-card" key={c.id}>
              {c.tag && <span className="cookie-tag">{c.tag}</span>}
              <div className="cookie-illust">
                <CookieSVG variant={c.variant} size={110} />
              </div>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ marginTop: 80 }}>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <span className="section-eyebrow">How it works</span>
          <h2 style={{ marginTop: 6, fontStyle: 'italic' }}>Four sweet steps from oven to you</h2>
        </div>
        <div className="steps">
          {STEPS.map(s => (
            <div className="step" key={s.n}>
              <div className="step-num-circle">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="cta-band">
        <div className="cherries-corner tl"><CherryDoodle type="cherries" size={80} /></div>
        <div className="cherries-corner br"><CherryDoodle type="cherries" size={80} /></div>
        <span className="badge badge-cream">Ordering windows</span>
        <h2>Twice a month, <span className="script">always fresh</span></h2>
        <p>We open orders twice a month for small-batch pickup and delivery in Richmond, VA. Follow us on Instagram for the next drop date — we always sell out.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/order" className="btn btn-primary">Place an order</Link>
          <a href="https://instagram.com/thecherryoven" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ background: 'rgba(253,246,238,0.15)', borderColor: 'var(--cream)', color: 'var(--cream)' }}>Follow on IG</a>
        </div>
      </section>

    </main>
  )
}
