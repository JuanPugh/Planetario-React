import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from "./pages/inicio.jsx"
import Nosotros from './pages/Nosotros.jsx'
import SolarSystem from './pages/SolarSystem.jsx'
import Horarios from './pages/Horarios.jsx'
import GalaxiasVecinas from './pages/GalaxiasVecinas.jsx'
import Productos from './pages/Productos.jsx'
import AddProducts from './pages/AddProduct.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/SolarSystem' element={<SolarSystem />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Horarios' element={<Horarios />} />
        <Route path='/GalaxiasVecinas' element={<GalaxiasVecinas />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Productos/add' element={<AddProducts />} />
      </Routes>
    </Router>
  )
}

export default App
