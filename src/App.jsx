import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Catalogue from './pages/Catalogue/Catalogue'
import Menu from './Components/Menu/Menu'
import Footer from "./Components/Footer/Footer"
import './App.css'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
  <ShoppingCartProvider>
  <Menu/>
  <Container className='mb-4'>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/catalogue" element={<Catalogue/>} />
    </Routes>
  </Container>
  <Footer/>
  </ShoppingCartProvider>
  )
}

export default App
