import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from "./pages/inicio.jsx"
import SolarSystem from './pages/SolarSystem.jsx'
import Horarios from './pages/Horarios.jsx'
import GalaxiasVecinas from './pages/GalaxiasVecinas.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/SolarSystem' element={<SolarSystem />} />
        <Route path='/Horarios' element={<Horarios />} />
        <Route path='/GalaxiasVecinas' element={<GalaxiasVecinas />} />
      </Routes>
    </Router>
  )
}

export default App
