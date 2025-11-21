import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import SolarSystem from './pages/SolarSystem.jsx'
import Horarios from './pages/Horarios.jsx'
import GalaxiasVecinas from './pages/GalaxiasVecinas.jsx'
import Productos from './pages/Productos.jsx'
import AddProducts from './pages/AddProduct.jsx'
import EditProduct from './pages/EditProduct.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import { AuthProvider } from './components/AuthContext.jsx'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/SolarSystem' element={<SolarSystem />} />
          <Route path='/Horarios' element={<Horarios />} />
          <Route path='/GalaxiasVecinas' element={<GalaxiasVecinas />} />
          <Route path='/Productos' element={<Productos />} />
          <Route path='/Productos/add' element={<AddProducts />} />
          <Route path='/Productos/edit/:id' element={<EditProduct />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
