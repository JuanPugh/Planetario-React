import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from "./pages/inicio.jsx"
import SolarSystem from './pages/SolarSystem.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/SolarSystem' element={<SolarSystem />} />
      </Routes>
    </Router>
  )
}

export default App
