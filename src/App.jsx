import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from "./pages/inicio.jsx"
import SolarSystem from './pages/SolarSystem.jsx'
import Horarios from './pages/Horarios.jsx'
import GalaxiasVecinas from './pages/GalaxiasVecinas.jsx'
import Productos from './pages/Productos.jsx'
import AddProducts from './pages/AddProduct.jsx'
import EditProduct from './pages/EditProduct.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/SolarSystem' element={<SolarSystem />} />
        <Route path='/Horarios' element={<Horarios />} />
        <Route path='/GalaxiasVecinas' element={<GalaxiasVecinas />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Productos/add' element={<AddProducts />} />
        <Route path='/Productos/edit/:id' element={<EditProduct />} />
      </Routes>
    </Router>
  )
}

export default App
