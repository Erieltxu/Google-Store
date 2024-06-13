import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CartMain from './components/Main/CartMain'



function App() {
  

  return (
    <div>
      <NavBar></NavBar>
      <CartMain></CartMain>
      <Footer></Footer>
    </div>
  )
}

export default App
