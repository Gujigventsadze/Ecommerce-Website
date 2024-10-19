import './App.css'
import Homepage from './Components/Homepage/Homepage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Navbar />} />
        <Route path='/about' element={<Navbar />} />
        <Route path='/contact' element={<Navbar />} />
        <Route path='/cart' element={<Navbar />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
