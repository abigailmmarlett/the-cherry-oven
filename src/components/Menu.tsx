interface MenuItem {
  name: string
  description: string
  price: string
}

const items: MenuItem[] = [
  { name: 'Cherry Danish', description: 'Flaky pastry filled with sweet cherry jam and cream cheese.', price: '$4.50' },
  { name: 'Sourdough Loaf', description: 'Classic slow-fermented sourdough with a crispy crust.', price: '$9.00' },
  { name: 'Almond Croissant', description: 'Buttery croissant filled with frangipane and toasted almonds.', price: '$5.00' },
  { name: 'Seasonal Layer Cake', description: 'Three layers of cake with house-made frosting. Ask about today\'s flavor.', price: '$42.00' },
  { name: 'Cinnamon Morning Bun', description: 'Rolled with brown sugar, cinnamon, and orange zest.', price: '$4.00' },
  { name: 'Focaccia', description: 'Olive oil focaccia with flaky sea salt and fresh rosemary.', price: '$7.00' },
]

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2>Our Menu</h2>
        <div className="menu-grid">
          {items.map((item) => (
            <div className="menu-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
