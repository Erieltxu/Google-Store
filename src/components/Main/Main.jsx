import React from 'react';
import EarbudsMain from './components/EarbudsMain';
import WatchesMain from './components/WatchesMain';
import CartMain from './components/CartMain';

const renderMainSection = () => {
  //section -parametro

  // switch (section) {
  //   case 'earbuds':
  //     return <EarbudsMain />;
  //   case 'watches':
  //     return <WatchesMain />;
  //   case 'cart':
  //     return <CartMain />;
  //   default:
  //     return null; 
  // }
  return(<CartMain />)

};

export default renderMainSection;