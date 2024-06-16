
import { useState } from 'react';
import './App.css'
import CartMain from './pages/CartMain';
import EarbudsProduct from './components/EarbudsProducto';
import Footer from './components/Footer';
import NavBar from './components/NavBar';






function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

 return (
  <main>
    <><Footer></Footer><NavBar></NavBar></>
    {currentPath === '/' && <EarbudsProduct/>}
    {currentPath === '/cart' && <CartMain/>}
    {currentPath === '/next' && <CartMain/>}
    {currentPath === '/Watches' && <CartMain/>}
    {currentPath === '/Earbuds' && <EarbudsMain/>}
    {currentPath === '/buys' && <CartMain/>}
  </main>
 )
}
export default App;
