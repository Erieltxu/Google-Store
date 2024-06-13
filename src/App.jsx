import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import EarbudsMain from './components/Main/EarbudsMain';

function App() {
  return (
    <div>
      <NavBar />
      <EarbudsMain />
      <Footer />
    </div>
  );
}

export default App;
