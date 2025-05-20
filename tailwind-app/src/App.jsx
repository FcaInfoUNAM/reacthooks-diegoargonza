import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import ContactUs from './ContactUs';
import TeamSection from './TeamSection';
import NotFound from './NotFound';
import ProductGrid from './ProductGrid'; // Nuevo import

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductGrid/>} /> {/* Cambiado a ProductGrid */}
        <Route path="Contact" element={<ContactUs/>} />
        <Route path="Team" element={<TeamSection/>} />
        <Route path="About" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App