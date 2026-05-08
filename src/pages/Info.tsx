import { Link } from 'react-router-dom'
import CherryDoodle from '../components/CherryDoodle'

const FAQ = [
  {
    q: 'How far in advance should I order?',
    a: 'Place orders during the open window for that month\'s pickup. For custom or catering orders, please reach out at least 2 weeks ahead so we have time to source ingredients and plan.',
  },
  {
    q: 'Do you ship cookies?',
    a: 'Not yet — but it\'s on the roadmap! For now, we\'re pickup or local delivery only within Richmond.',
  },
  {
    q: 'Can I cancel or change my order?',
    a: 'You can change flavors or quantities up until the order window closes (Thursday 9 PM). After that, we\'ve started shopping & prepping, so changes aren\'t possible.',
  },
  {
    q: 'How long do the cookies stay fresh?',
    a: 'Best within 3 days at room temp in an airtight container. Freeze them up to 1 month for emergencies. Reheat 30 sec in the microwave for that fresh-baked vibe.',
  },
  {
    q: 'Can you do gluten-free or vegan?',
    a: 'Not currently. We\'re a one-person operation and developing those recipes properly takes time. Stay tuned — we hope to add GF options later this year.',
  },
]

export default function Info() {
  return (
    <main className="page page-narrow">
      {/* Hero */}
      <section className="info-hero">
        <span className="badge">
          <CherryDoodle type="sparkle" size={12} /> The fine print, but make it sweet
        </span>
        <h1>
          Everything you'd want to know <span className="accent">before ordering</span>
        </h1>
        <p>How it works, when we open, what's in the cookies, and a little about the baker (hi, Keeley!).</p>
      </section>

      <hr className="dotted-rule" />

      {/* 01 How ordering works */}
      <section className="info-section">
        <div className="heading">
          <div className="num">01</div>
          <h2>How ordering works</h2>
          <p>Twice-monthly drops, small batches, freshly baked.</p>
        </div>
        <div>
          <div className="ticket" style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 14 }}>
              <div>
                <div style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--cocoa-soft)', fontWeight: 600 }}>Ordering Window</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 600, marginTop: 4 }}>Mon–Thu, twice a month</div>
                <div style={{ marginTop: 8 }}>Order forms open at 9 AM Monday and close 9 PM Thursday — or sooner if we sell out.</div>
              </div>
              <CherryDoodle type="cherries" size={80} />
            </div>
          </div>

          <h3 style={{ marginBottom: 14 }}>Upcoming windows</h3>
          <div className="windows-grid">
            <div className="window-card next">
              <span className="next-tag">Watch IG</span>
              <div className="month">Current</div>
              <div className="dates">Window open</div>
              <div className="pickup"><strong>Pickup/Delivery:</strong> Richmond, VA<br />Exact dates posted on Instagram.</div>
            </div>
            <div className="window-card">
              <div className="month">Coming</div>
              <div className="dates">Next drop</div>
              <div className="pickup">Follow <strong>@thecherryoven</strong> on Instagram for the exact date announcement.</div>
            </div>
            <div className="window-card">
              <div className="month">And more</div>
              <div className="dates">Twice a month</div>
              <div className="pickup">Two ordering windows per month, year-round. New flavors with each drop.</div>
            </div>
          </div>
          <p style={{ marginTop: 16, fontSize: '0.9rem' }}>
            Custom orders, weddings, & catering are accepted year-round —{' '}
            <a href="#contact">reach out</a> with at least 2 weeks notice.
          </p>
        </div>
      </section>

      <hr className="dotted-rule" />

      {/* 02 Pickup & Delivery */}
      <section className="info-section flip">
        <div>
          <div className="card" style={{ background: 'var(--cream-2)' }}>
            <h3 style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              <CherryDoodle type="heart" size={18} /> Pickup spot
            </h3>
            <p style={{ color: 'var(--cocoa)' }}>
              <strong>Saturdays, 10 AM — 2 PM</strong><br />
              Church Hill, Richmond, VA<br />
              Exact address sent the night before.
            </p>
            <p style={{ marginTop: 10, fontSize: '0.9rem' }}>Look for the sign out front. Exact address confirmed by email.</p>
          </div>
          <div className="card" style={{ marginTop: 16 }}>
            <h3 style={{ marginBottom: 8 }}>Local delivery (+$8)</h3>
            <p>Available within ~6 miles of downtown RVA. Delivered between 10 AM and 2 PM on pickup day. Contactless drop-off welcome.</p>
            <p style={{ marginTop: 8, fontSize: '0.9rem' }}>
              <strong>Delivery zones:</strong> Within ~6 miles of downtown RVA. Exact eligibility confirmed at order time.
            </p>
          </div>
        </div>
        <div className="heading">
          <div className="num">02</div>
          <h2>Pickup & delivery</h2>
          <p>We're a tiny home bakery in Richmond, VA — pickup is the easiest, but we deliver locally too.</p>
        </div>
      </section>

      <hr className="dotted-rule" />

      {/* 03 Pricing */}
      <section className="info-section">
        <div className="heading">
          <div className="num">03</div>
          <h2>Pricing</h2>
          <p>Mix and match flavors freely. Double up to share.</p>
        </div>
        <div>
          <h3 style={{ marginBottom: 14, fontStyle: 'italic' }}>Cookie boxes</h3>
          <div className="pricing-table">
            <div className="price-card">
              <div className="top">Box of 4</div>
              <div className="price">$8</div>
              <div className="qty">4 cookies</div>
              <div className="note">Mix any flavors. Perfect treat for yourself.</div>
            </div>
            <div className="price-card">
              <div className="top">Box of 6</div>
              <div className="price">$10</div>
              <div className="qty">6 cookies</div>
              <div className="note">Mix any flavors. Great for sharing (or not).</div>
            </div>
            <div className="price-card">
              <div className="top">2 Boxes of 4</div>
              <div className="price">$15</div>
              <div className="qty">8 cookies total</div>
              <div className="note">Two boxes of 4. Mix flavors freely across both.</div>
            </div>
            <div className="price-card feature">
              <div className="top">2 Boxes of 6 ★</div>
              <div className="price">$25</div>
              <div className="qty">12 cookies total</div>
              <div className="note">Best value. Two full boxes. Mix freely.</div>
            </div>
            <div className="price-card">
              <div className="top">Box of 6 Specials</div>
              <div className="price">$20</div>
              <div className="qty">6 specialty items</div>
              <div className="note">Six of the special items — see that window's menu for what's offered.</div>
            </div>
          </div>

          <h3 style={{ marginTop: 32, marginBottom: 14, fontStyle: 'italic' }}>Catering</h3>
          <div className="pricing-table">
            <div className="price-card">
              <div className="top">Small gathering</div>
              <div className="price">$200</div>
              <div className="qty">Up to 25 people</div>
              <div className="note">Includes 3 flavors. Subject to change for special requests.</div>
            </div>
            <div className="price-card">
              <div className="top">Mid-size event</div>
              <div className="price">$400</div>
              <div className="qty">25–50 people</div>
              <div className="note">Includes 3 flavors. Subject to change for special requests.</div>
            </div>
            <div className="price-card">
              <div className="top">Large event</div>
              <div className="price">$600</div>
              <div className="qty">50–100 people</div>
              <div className="note">Includes 3 flavors. Subject to change for special requests.</div>
            </div>
          </div>
          <p style={{ marginTop: 16, fontSize: '0.9rem' }}>
            Custom orders & weddings are quoted separately. Reach out via Instagram with at least 2 weeks notice.
          </p>
        </div>
      </section>

      <hr className="dotted-rule" />

      {/* 04 Allergens */}
      <section className="info-section flip">
        <div>
          <p style={{ marginBottom: 18 }}>Every cookie is made in a home kitchen that handles milk, gluten, soy, and eggs.</p>
          <h3 style={{ marginBottom: 12 }}>Standard ingredients across all flavors</h3>
          <div className="allergen-grid">
            <div className="allergen-pill contains"><span className="dot" />Milk</div>
            <div className="allergen-pill contains"><span className="dot" />Gluten</div>
            <div className="allergen-pill contains"><span className="dot" />Soy</div>
            <div className="allergen-pill contains"><span className="dot" />Eggs</div>
            <div className="allergen-pill maycontain"><span className="dot" />May contain nuts</div>
          </div>
          <h3 style={{ marginBottom: 12, marginTop: 24 }}>Have a serious allergy?</h3>
          <p>
            We can't guarantee an allergen-free environment, but we'll do our best to bake your order first thing in a freshly-cleaned kitchen.
            Mention it in the order notes — Keeley will follow up before baking.
          </p>
        </div>
        <div className="heading">
          <div className="num">04</div>
          <h2>Allergens & ingredients</h2>
          <p>We bake with real butter and real cream — always honest ingredients.</p>
        </div>
      </section>

      <hr className="dotted-rule" />

      {/* About Keeley */}
      <section style={{ marginTop: 60 }}>
        <div className="story">
          <div className="story-photo">
            <div className="stripes">
              <div>
                <CherryDoodle type="cherries" size={60} />
                <div style={{ marginTop: 8 }}>[ photo of Keeley<br />in the kitchen ]</div>
              </div>
            </div>
          </div>
          <div>
            <span className="section-eyebrow">The baker</span>
            <h2 style={{ marginTop: 6 }}>Hi, I'm <span className="script">Keeley</span></h2>
            <p>I started The Cherry Oven in my apartment kitchen with a stand mixer my grandma gave me and a stubborn attachment to brown butter. What started as cookies for friends became cookies for a tiny but loyal Richmond following.</p>
            <p>I bake everything by hand, in small batches, the morning of pickup. No preservatives, no shortcuts, lots of butter. Cherries are kind of my thing — hence the name.</p>
            <p>Thanks for being here. Hope something on the menu makes your week a little sweeter.</p>
            <span className="signature">— Keeley xo</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: 80 }}>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 32px' }}>
          <span className="section-eyebrow">Quick answers</span>
          <h2 style={{ marginTop: 6, fontStyle: 'italic' }}>FAQ</h2>
        </div>
        <div className="faq-list">
          {FAQ.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="answer">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ marginTop: 80 }}>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 32px' }}>
          <span className="section-eyebrow">Find us</span>
          <h2 style={{ marginTop: 6, fontStyle: 'italic' }}>Say hi</h2>
          <p style={{ marginTop: 10 }}>Custom orders, allergy questions, or just to chat about cookies.</p>
        </div>
        <div className="contact-strip">
          <a href="https://instagram.com/thecherryoven" target="_blank" rel="noreferrer" className="contact-card">
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>
            <h3>Instagram</h3>
            <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--cherry)' }}>@thecherryoven</span>
          </a>
          <a href="https://instagram.com/thecherryoven" target="_blank" rel="noreferrer" className="contact-card">
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3>DM on Instagram</h3>
            <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--cherry)' }}>Send us a message →</span>
          </a>
          <Link to="/order" className="contact-card">
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
            </div>
            <h3>Order form</h3>
            <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--cherry)' }}>Place an order →</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
