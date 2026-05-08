import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Info from './pages/Info'
import Order from './pages/Order'
import Reviews from './pages/Reviews'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
