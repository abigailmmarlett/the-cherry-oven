import { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import CookieSVG, { type CookieVariant } from '../CookieSVG'
import CherryDoodle from '../CherryDoodle'

interface Flavor {
  id: string
  name: string
  desc: string
  tag: string | null
  variant: CookieVariant
}

interface Box {
  id: string
  name: string
  count: number
  price: number
  desc: string
  popular?: boolean
}

interface Details {
  name: string
  email: string
  phone: string
  fulfillment: string
  window: string
  address?: string
  notes?: string
  referral?: string
}

const FLAVORS: Flavor[] = [
  { id: 'brown-butter-choc', name: 'Brown Butter Chocolate Chip', desc: 'Toasty brown butter base, big chocolate chips, crispy edge and fudgy middle.', tag: null, variant: 'choc' },
  { id: 'strawberry-cream', name: 'Strawberry & Cream', desc: 'Fresh strawberry flavor in a soft, creamy cookie.', tag: null, variant: 'strawberry' },
  { id: 'blueberry-lemon', name: 'Blueberry Lemon Cheesecake', desc: 'Bright lemon cookie with blueberry and a cheesecake swirl.', tag: null, variant: 'lemon' },
  { id: 'banana-muffin', name: 'Banana Muffin', desc: 'All the cozy flavors of a banana muffin in cookie form.', tag: null, variant: 'blondie' },
  { id: 'sugar-cookie-bars', name: 'Sugar Cookie Bars', desc: 'Soft sugar cookie bars with whipped vanilla icing.', tag: null, variant: 'snicker' },
  { id: 'honey-butter-biscuits', name: 'Honey Butter Biscuits', desc: 'Homemade honey butter biscuits — warm, buttery, golden.', tag: null, variant: 'chai' },
  { id: 'texas-sheet-cake', name: 'Texas Sheet Cake', desc: 'Rich chocolate sheet cake with toasted pecans.', tag: null, variant: 'choc' },
]

const BOXES: Box[] = [
  { id: 'box-4', name: 'Box of 4', count: 4, price: 8, desc: '4 cookies, mix any flavors.' },
  { id: 'box-6', name: 'Box of 6', count: 6, price: 10, desc: '6 cookies, mix any flavors.' },
  { id: 'two-box-4', name: '2 Boxes of 4', count: 8, price: 15, desc: 'Two boxes of 4 — great for sharing.' },
  { id: 'two-box-6', name: '2 Boxes of 6', count: 12, price: 25, desc: 'Two full boxes of 6. Best value.', popular: true },
  { id: 'specials-6', name: 'Box of 6 Specials', count: 6, price: 20, desc: 'A box of 6 specialty items.' },
]

const STEPS = ['Box', 'Flavors', 'Details', 'Review']

// ---------- Box illustration ----------
function BoxIllustration({ count }: { count: number }) {
  const cols = count <= 6 ? 3 : count <= 12 ? 4 : 6
  const rows = Math.ceil(count / cols)
  const colors = ['#c8253a', '#d8a06b', '#f6c97a', '#cdd9a5', '#fadbdd', '#e8b88d']
  return (
    <svg viewBox="0 0 120 80" width={100} height={70}>
      <rect x="6" y="14" width="108" height="58" rx="8" fill="#fadbdd" stroke="#c8253a" strokeWidth="2"/>
      <rect x="6" y="6" width="108" height="14" rx="6" fill="#c8253a"/>
      <text x="60" y="16" fill="#fdf6ee" fontSize="8" fontFamily="serif" textAnchor="middle" fontStyle="italic">The Cherry Oven</text>
      {Array.from({ length: count }).map((_, i) => {
        const col = i % cols
        const row = Math.floor(i / cols)
        const cellW = 100 / cols
        const cellH = 50 / rows
        const cx = 12 + col * cellW + cellW / 2
        const cy = 26 + row * cellH + cellH / 2
        const r = Math.min(cellW, cellH) * 0.36
        return <circle key={i} cx={cx} cy={cy} r={r} fill={colors[i % colors.length]} stroke="#3a1f1a" strokeWidth="0.8"/>
      })}
    </svg>
  )
}

// ---------- Step indicator ----------
function StepIndicator({ current }: { current: number }) {
  return (
    <div className="step-indicator">
      {STEPS.map((s, i) => (
        <div key={s} style={{ display: 'contents' }}>
          <div className={`step-dot${i < current ? ' done' : ''}${i === current ? ' active' : ''}`}>
            <span className="step-num">{i < current ? '✓' : i + 1}</span>
            <span className="step-label">{s}</span>
          </div>
          {i < STEPS.length - 1 && <div className={`step-line${i < current ? ' done' : ''}`} />}
        </div>
      ))}
    </div>
  )
}

// ---------- Step 1: Box ----------
function StepBox({ box, setBox, next }: { box: Box | null; setBox: (b: Box) => void; next: () => void }) {
  return (
    <div className="step-content">
      <h2 style={{ fontStyle: 'italic' }}>
        Pick your <span style={{ fontFamily: 'var(--script)', color: 'var(--cherry)', fontSize: '1.3em' }}>box size</span>
      </h2>
      <p style={{ marginTop: 8, marginBottom: 28 }}>How many cookies are we baking? You can mix flavors freely in the next step.</p>
      <div className="box-grid">
        {BOXES.map(b => (
          <button key={b.id} onClick={() => setBox(b)} className={`box-card${box?.id === b.id ? ' selected' : ''}`}>
            {b.popular && <span className="box-popular">Most popular</span>}
            <div className="box-illust">
              <BoxIllustration count={b.count} />
            </div>
            <h3>{b.name}</h3>
            <div className="box-price">${b.price}</div>
            <p>{b.desc}</p>
          </button>
        ))}
      </div>
      <div className="step-actions">
        <span />
        <button className="btn btn-primary" onClick={next} disabled={!box}>Choose flavors →</button>
      </div>
    </div>
  )
}

// ---------- Step 2: Flavors ----------
function StepFlavors({
  box, flavors, setFlavors, next, back,
}: {
  box: Box; flavors: Record<string, number>; setFlavors: React.Dispatch<React.SetStateAction<Record<string, number>>>; next: () => void; back: () => void
}) {
  const target = box.count
  const total = Object.values(flavors).reduce((a, b) => a + b, 0)
  const canProceed = total === target

  const updateFlavor = (id: string, delta: number) => {
    setFlavors(prev => {
      const qty = prev[id] || 0
      if (delta > 0 && total >= target) return prev
      return { ...prev, [id]: Math.max(0, qty + delta) }
    })
  }

  return (
    <div className="step-content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 14 }}>
        <div>
          <h2 style={{ fontStyle: 'italic' }}>
            Build your <span style={{ fontFamily: 'var(--script)', color: 'var(--cherry)', fontSize: '1.3em' }}>mix</span>
          </h2>
          <p style={{ marginTop: 8 }}>Pick {target} cookies. Mix any way you'd like.</p>
        </div>
        <div className="flavor-counter">
          <div className="flavor-counter-num">
            <span style={{ color: canProceed ? 'var(--leaf)' : 'var(--cherry)' }}>{total}</span>
            <span style={{ color: 'var(--cocoa-soft)' }}> / {target}</span>
          </div>
          <div className="flavor-counter-label">{canProceed ? '✓ Ready' : 'cookies'}</div>
        </div>
      </div>
      <div className="flavor-grid" style={{ marginTop: 24 }}>
        {FLAVORS.map(f => {
          const qty = flavors[f.id] || 0
          return (
            <div key={f.id} className={`flavor-card${qty > 0 ? ' has-qty' : ''}`}>
              <div className="flavor-illust"><CookieSVG variant={f.variant} size={64} /></div>
              <div className="flavor-info">
                <div className="flavor-head">
                  <h3>{f.name}</h3>
                  {f.tag && <span className={`tag tag-${f.tag.toLowerCase()}`}>{f.tag}</span>}
                </div>
                <p>{f.desc}</p>
              </div>
              <div>
                <div className="qty-stepper">
                  <button onClick={() => updateFlavor(f.id, -1)} disabled={qty === 0} aria-label="Remove one">−</button>
                  <span className="qty-num">{qty}</span>
                  <button onClick={() => updateFlavor(f.id, 1)} disabled={total >= target} aria-label="Add one">+</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="step-actions">
        <button className="btn btn-ghost" onClick={back}>← Back</button>
        <button className="btn btn-primary" onClick={next} disabled={!canProceed}>
          {canProceed ? 'Add details →' : `Pick ${target - total} more`}
        </button>
      </div>
    </div>
  )
}

// ---------- Step 3: Details ----------
function StepDetails({
  details, setDetails, next, back,
}: {
  details: Details; setDetails: React.Dispatch<React.SetStateAction<Details>>; next: () => void; back: () => void
}) {
  const update = (k: keyof Details, v: string) => setDetails(d => ({ ...d, [k]: v }))
  const canProceed = details.name && details.email && details.phone && details.fulfillment && details.window

  return (
    <div className="step-content">
      <h2 style={{ fontStyle: 'italic' }}>
        The <span style={{ fontFamily: 'var(--script)', color: 'var(--cherry)', fontSize: '1.3em' }}>details</span>
      </h2>
      <p style={{ marginTop: 8, marginBottom: 28 }}>So we know who you are and where these cookies are headed.</p>

      <div className="form-grid">
        <div className="field">
          <label>Your name *</label>
          <input type="text" value={details.name} onChange={e => update('name', e.target.value)} placeholder="Keeley Smith" />
        </div>
        <div className="field">
          <label>Email *</label>
          <input type="email" value={details.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com" />
        </div>
        <div className="field">
          <label>Phone *</label>
          <input type="tel" value={details.phone} onChange={e => update('phone', e.target.value)} placeholder="(804) 555-0100" />
        </div>
        <div className="field">
          <label>Pickup window *</label>
          <select value={details.window} onChange={e => update('window', e.target.value)}>
            <option value="">Choose a window…</option>
            <option>Next available Saturday (Keeley will confirm)</option>
            <option>Following Saturday (Keeley will confirm)</option>
          </select>
        </div>
      </div>

      <div className="field" style={{ marginTop: 20 }}>
        <label>Pickup or delivery? *</label>
        <div className="radio-group">
          {[
            { id: 'pickup', label: 'Pickup', sub: 'Sat 10–2, Church Hill RVA · free' },
            { id: 'delivery', label: 'Local delivery', sub: 'Within 6 mi of downtown · +$8' },
          ].map(opt => (
            <label key={opt.id} className={`radio-card${details.fulfillment === opt.id ? ' selected' : ''}`}>
              <input
                type="radio"
                name="fulfillment"
                checked={details.fulfillment === opt.id}
                onChange={() => update('fulfillment', opt.id)}
              />
              <div>
                <div className="radio-label">{opt.label}</div>
                <div className="radio-sub">{opt.sub}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {details.fulfillment === 'delivery' && (
        <div className="field" style={{ marginTop: 16 }}>
          <label>Delivery address</label>
          <input type="text" value={details.address || ''} onChange={e => update('address', e.target.value)} placeholder="Street, City, ZIP" />
        </div>
      )}

      <div className="field" style={{ marginTop: 20 }}>
        <label>Allergies / special requests</label>
        <span className="hint">Anything we should know? (Allergies, dietary needs, occasion, etc.)</span>
        <textarea
          value={details.notes || ''}
          onChange={e => update('notes', e.target.value)}
          placeholder="No tree nuts please — also it's for my partner's birthday!"
        />
      </div>

      <div className="field" style={{ marginTop: 20 }}>
        <label>How'd you hear about us?</label>
        <select value={details.referral || ''} onChange={e => update('referral', e.target.value)}>
          <option value="">— optional —</option>
          <option>Instagram</option>
          <option>A friend</option>
          <option>Local market</option>
          <option>Saw it in the neighborhood</option>
          <option>Other</option>
        </select>
      </div>

      <div className="step-actions">
        <button className="btn btn-ghost" onClick={back}>← Back</button>
        <button className="btn btn-primary" onClick={next} disabled={!canProceed}>Review order →</button>
      </div>
    </div>
  )
}

// ---------- Step 4: Review ----------
function StepReview({
  box, flavors, details, back, submit, submitting, submitError,
}: {
  box: Box; flavors: Record<string, number>; details: Details; back: () => void; submit: () => void; submitting: boolean; submitError: string | null
}) {
  const flavorList = FLAVORS.filter(f => (flavors[f.id] || 0) > 0).map(f => ({ ...f, qty: flavors[f.id] }))
  const deliveryFee = details.fulfillment === 'delivery' ? 8 : 0
  const total = box.price + deliveryFee

  return (
    <div className="step-content">
      <h2 style={{ fontStyle: 'italic' }}>
        Almost <span style={{ fontFamily: 'var(--script)', color: 'var(--cherry)', fontSize: '1.3em' }}>baked</span>
      </h2>
      <p style={{ marginTop: 8, marginBottom: 28 }}>Double-check everything looks right, then we'll confirm by email.</p>

      <div className="ticket review-ticket">
        <div className="review-head">
          <div>
            <div style={{ fontFamily: 'var(--script)', fontSize: '2rem', color: 'var(--cherry)', lineHeight: 1 }}>Order Receipt</div>
            <div style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--cocoa-soft)', marginTop: 4 }}>The Cherry Oven · Baking Co.</div>
          </div>
          <CherryDoodle type="cherries" size={64} />
        </div>

        <hr style={{ border: 'none', borderTop: '1.5px dashed var(--cherry)', margin: '20px 0' }} />

        <div className="review-section">
          <div className="review-label">Box</div>
          <div className="review-value">
            <strong>{box.name}</strong> — ${box.price}
            <div style={{ fontSize: '0.85rem', color: 'var(--cocoa-soft)', marginTop: 4 }}>{box.count} cookie{box.count > 1 ? 's' : ''}</div>
          </div>
        </div>

        <div className="review-section">
          <div className="review-label">Flavors</div>
          <div className="review-value">
            {flavorList.map(f => (
              <div key={f.id} className="review-flavor">
                <span>{f.qty}× {f.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="review-section">
          <div className="review-label">Pickup</div>
          <div className="review-value">
            <strong>{details.fulfillment === 'delivery' ? 'Local delivery' : 'Pickup'}</strong> — {details.window}
            {details.address && <div style={{ fontSize: '0.85rem', color: 'var(--cocoa-soft)', marginTop: 4 }}>{details.address}</div>}
          </div>
        </div>

        <div className="review-section">
          <div className="review-label">Contact</div>
          <div className="review-value">
            {details.name}<br />
            <span style={{ fontSize: '0.9rem', color: 'var(--cocoa-soft)' }}>{details.email} · {details.phone}</span>
          </div>
        </div>

        {details.notes && (
          <div className="review-section">
            <div className="review-label">Notes</div>
            <div className="review-value" style={{ fontStyle: 'italic' }}>{details.notes}</div>
          </div>
        )}

        <hr style={{ border: 'none', borderTop: '1.5px dashed var(--cherry)', margin: '20px 0' }} />

        <div className="review-totals">
          <div><span>Subtotal</span><span>${box.price.toFixed(2)}</span></div>
          {deliveryFee > 0 && <div><span>Delivery</span><span>+$8.00</span></div>}
          <div className="grand"><span>Total</span><span>${total.toFixed(2)}</span></div>
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--cocoa-soft)', marginTop: 12, textAlign: 'center' }}>
          Payment via Venmo or Zelle after we confirm. No charge yet!
        </p>
      </div>

      <div className="step-actions">
        <button className="btn btn-ghost" onClick={back} disabled={submitting}>← Edit</button>
        <button className="btn btn-primary" onClick={submit} disabled={submitting}>
          {submitting ? 'Sending…' : <><span>Submit order</span> <CherryDoodle type="heart" size={16} /></>}
        </button>
      </div>
      {submitError && (
        <p style={{ textAlign: 'center', marginTop: 16, color: 'var(--cherry)', fontSize: '0.9rem' }}>
          {submitError}{' '}
          <a href="https://instagram.com/thecherryoven" target="_blank" rel="noreferrer">DM us on Instagram →</a>
        </p>
      )}
    </div>
  )
}

// ---------- Confirmation ----------
function Confirmation({ details, reset }: { details: Details; reset: () => void }) {
  return (
    <div className="step-content confirmation">
      <div className="confirm-ring">
        <div className="confirm-inner">
          <CherryDoodle type="cherries" size={100} />
        </div>
      </div>
      <h2 style={{ fontStyle: 'italic', marginTop: 24 }}>
        Order placed,{' '}
        <span style={{ fontFamily: 'var(--script)', color: 'var(--cherry)', fontSize: '1.3em' }}>
          {details.name?.split(' ')[0] || 'friend'}
        </span>!
      </h2>
      <p style={{ maxWidth: 480, margin: '16px auto 0' }}>
        Your order is in! Keeley will reach out to <strong>{details.email}</strong> within 24 hrs with payment instructions (Venmo or Zelle).
      </p>
      <div className="step-actions" style={{ justifyContent: 'center', marginTop: 32 }}>
        <Link to="/" className="btn btn-ghost">Back to home</Link>
        <button className="btn btn-primary" onClick={reset}>Place another order</button>
      </div>
    </div>
  )
}

// ---------- Main wizard ----------
export default function OrderWizard() {
  const [step, setStep] = useState(0)
  const [box, setBox] = useState<Box | null>(null)
  const [flavors, setFlavors] = useState<Record<string, number>>({})
  const [details, setDetails] = useState<Details>({ name: '', email: '', phone: '', fulfillment: '', window: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSetBox = (b: Box) => {
    setBox(b)
    setFlavors({})
  }

  const reset = () => {
    setStep(0); setBox(null); setFlavors({})
    setDetails({ name: '', email: '', phone: '', fulfillment: '', window: '' })
    setSubmitted(false); setSubmitting(false); setSubmitError(null)
  }

  const handleSubmit = async () => {
    if (!box) return
    setSubmitting(true)
    setSubmitError(null)

    const flavorLines = FLAVORS
      .filter(f => (flavors[f.id] || 0) > 0)
      .map(f => `${flavors[f.id]}× ${f.name}`)
      .join('\n')

    const deliveryFee = details.fulfillment === 'delivery' ? 8 : 0
    const params = {
      customer_name: details.name,
      customer_email: details.email,
      customer_phone: details.phone,
      box_name: box.name,
      box_price: box.price.toFixed(2),
      flavors: flavorLines,
      fulfillment: details.fulfillment === 'delivery' ? 'Local delivery' : 'Pickup',
      pickup_window: details.window,
      delivery_address: details.address || '—',
      notes: details.notes || '—',
      referral: details.referral || '—',
      total: (box.price + deliveryFee).toFixed(2),
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_OWNER,
        params,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setSubmitted(true)
    } catch {
      setSubmitError('Something went wrong sending your order. Please try again or DM us on Instagram.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) return <Confirmation details={details} reset={reset} />

  return (
    <div className="wizard">
      <StepIndicator current={step} />
      {step === 0 && <StepBox box={box} setBox={handleSetBox} next={() => setStep(1)} />}
      {step === 1 && box && <StepFlavors box={box} flavors={flavors} setFlavors={setFlavors} next={() => setStep(2)} back={() => setStep(0)} />}
      {step === 2 && box && <StepDetails details={details} setDetails={setDetails} next={() => setStep(3)} back={() => setStep(1)} />}
      {step === 3 && box && <StepReview box={box} flavors={flavors} details={details} back={() => setStep(2)} submit={handleSubmit} submitting={submitting} submitError={submitError} />}
    </div>
  )
}
