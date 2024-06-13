import React, { useState } from 'react';
import './earbudsMain.css';
import EarbudsProduct from './MainMolecules/EarbudsProducto';
import EarbudsViews from './MainMolecules/EarbudsViews';

const EarbudsMain = () => {
const [selectedColor, setSelectedColor] = useState('celeste');
const [selectedImage, setSelectedImage] = useState('earbuds_01_celeste');

const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedImage(`earbuds_01_${color}`);
};

const handleImageChange = (image) => {
    setSelectedImage(image);
};

return (
        <main>
        <section className="back">
            <a href="#"><img src="src/assets/img/icons/Arrow.svg" alt="Arrow icon" /><p>See product details</p></a>
        </section>   

        <EarbudsViews selectedColor={selectedColor} handleImageChange={handleImageChange} />

        <EarbudsProduct
            selectedColor={selectedColor}
            selectedImage={selectedImage}
            handleColorChange={handleColorChange}
        />
        </main>
    );
};

export default EarbudsMain;