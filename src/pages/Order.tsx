import CherryDoodle from '../components/CherryDoodle'
import OrderWizard from '../components/order/OrderWizard'

export default function Order() {
  return (
    <main className="page">
      <section className="order-hero">
        <span className="badge">
          <CherryDoodle type="sparkle" size={12} /> New window · follow @thecherryoven on IG for dates
        </span>
        <h1>Let's <span className="accent">build a box</span></h1>
        <p style={{ maxWidth: 540, margin: '0 auto' }}>
          Four sweet steps. We'll confirm by email & send payment details (Venmo or Zelle) once we receive your order.
        </p>
      </section>
      <OrderWizard />
    </main>
  )
}
