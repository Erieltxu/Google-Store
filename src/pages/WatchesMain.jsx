import React from 'react';

import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import './WatchesMain.css';
import WatchesProducto from '../components/WatchesProducto';


const WatchesMain = () => {
    return (
<>
<Navbar></Navbar>
    <main>  
        <WatchesProducto></WatchesProducto>

   </main>
<Footer></Footer>
</>

    );
};

export default WatchesMain;