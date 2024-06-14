import React, { useState } from 'react';
import './earbudsMain.css';
import EarbudsProduct from '../components/EarbudsProducto';
import EarbudsViews from '../components/EarbudsViews';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

const EarbudsMain = () => {
    const [selectedColor, setSelectedColor] = useState('celeste');
    const [selectedView, setSelectedView] = useState('01');
    const [selectedImage, setSelectedImage] = useState('earbuds_${selectedView}_${selectedColor}');

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setSelectedImage(`earbuds_${selectedView}_${color}`);
    };

    const handleViewChange = (view) => {
        setSelectedView(view);
        setSelectedImage(`earbuds_${view}_${selectedColor}`);
    };

    const handleImageChange = (image) => {
        setSelectedImage(image);
    };

return (
    <>
        <NavBar></NavBar>
        <main>
        <section className="back">
            <a href="#"><img src="src/assets/img/icons/Arrow.svg" alt="Arrow icon" /><p>See product details</p></a>
        </section>   

        <EarbudsViews 
                    selectedColor={selectedColor} 
                    handleImageChange={handleImageChange} 
                    selectedView={selectedView}
                    handleViewChange={handleViewChange}
                />

                <EarbudsProduct
                    selectedColor={selectedColor}
                    selectedImage={selectedImage}
                    handleColorChange={handleColorChange}
                />
        </main>
        <Footer></Footer>
    </>
    );
};

export default EarbudsMain;