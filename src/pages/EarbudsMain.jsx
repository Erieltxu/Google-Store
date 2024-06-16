import React, { useState } from 'react';
import './earbudsMain.css';
import EarbudsProduct from '../components/EarbudsProducto';
import EarbudsViews from '../components/EarbudsViews';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import earbudsImages from '../config/images';

const EarbudsMain = () => {
    const [selectedColor, setSelectedColor] = useState('celeste');
    const [selectedView, setSelectedView] = useState(1);

    const getSelectedImage = () => {
        const view = earbudsImages.find(image => image.id === selectedView);
        return view ? view.views[selectedColor] : '';
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleViewChange = (viewId) => {
        setSelectedView(viewId);
    };

    return (
        <>
            
            
                <section className="back">
                    <a href="#">
                        <img src="src/assets/img/icons/Arrow.svg" alt="Arrow icon" />
                       
                        <p>See product details</p>
                    </a>
                </section>
                <EarbudsViews 
                    selectedColor={selectedColor} 
                    handleViewChange={handleViewChange}
                />
                <EarbudsProduct
                    selectedColor={selectedColor}
                    selectedImage={getSelectedImage()}
                    handleColorChange={handleColorChange}
                />
            
            
        </>
    );
};

export default EarbudsMain;