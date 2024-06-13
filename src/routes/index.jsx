import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


function App() {
  

  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/earbuds" element={<EarbudsMain />} />
    </Routes>
  </Router>
);
}


export default App
