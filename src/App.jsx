import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from "./pages/inicio.jsx"
import Nosotros from './pages/Nosotros.jsx'
import SolarSystem from './pages/SolarSystem.jsx'
import Horarios from './pages/Horarios.jsx'
import GalaxiasVecinas from './pages/GalaxiasVecinas.jsx'
import Productos from './pages/Productos.jsx'
import AddProducts from './pages/AddProduct.jsx'
import EditProduct from './pages/EditProduct.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Cart from './pages/Cart.jsx'
import { AuthProvider } from './components/AuthContext.jsx'
import { CartProvider } from './components/CartContext.jsx'

function App() {
  return (

    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/SolarSystem' element={<SolarSystem />} />
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/Horarios' element={<Horarios />} />
            <Route path='/GalaxiasVecinas' element={<GalaxiasVecinas />} />
            <Route path='/Productos' element={<Productos />} />
            <Route path='/Productos/add' element={<AddProducts />} />
            <Route path='/Productos/edit/:id' element={<EditProduct />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='*' element={<Inicio />} />

          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
