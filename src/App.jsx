
import { useState } from 'react';
import './App.css'
import CartMain from './pages/CartMain';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import EarbudsMain from './pages/EarbudsMain';
import WatchesMain from './pages/WatchesMain'






function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

 return (
  <>
  <NavBar></NavBar>
  <main>
    
    {currentPath === '/' && <EarbudsMain/>}
    {currentPath === '/cart' && <CartMain/>}
    {currentPath === '/Watches' && <WatchesMain/>}
    {currentPath === '/Earbuds' && <EarbudsMain/>}
    
  </main>
  <Footer></Footer>
  </>
 )
}
export default App;
