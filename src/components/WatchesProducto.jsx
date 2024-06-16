import React, { useState } from 'react';


const WatchesProducto = () => {
    const [selectedColor, setSelectedColor] = useState('black');

    const colorImages = {
        black: 'src/assets/img/smartwatch/smartwatch_black.png',
        pink: 'src/assets/img/smartwatch/smartwatch_pink.png',
        yellow: 'src/assets/img/smartwatch/smartwatch_yellow.png'
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        
        <main>
             <section class="back">
        <a herf="#"><img src="src\assets\img\icons\Arrow.svg"/><p>See product details</p></a>
             </section>   
              <section className="watchProducto">
                <div className="imagenProducto">
                    <img id="mainProductImage" src={colorImages[selectedColor]} alt={`Foto del Smartwatch en ${selectedColor}`} />
                </div>
                <div className="producto">
                    <div className="modeloProducto">
                        <h2>Fitbit Inspire 3</h2>
                        <p>Health & Fitness Tracker</p>
                        <h3>99,95 €</h3>
                        <hr />
                        <p>Choose a color</p>
                        <div className="modeloColor">
                            <div className="colorReloj" onClick={() => handleColorChange('black')}>
                                <img src={colorImages.black} alt="Modelo de Smartwatch en negro" /><p>Midnight Zen</p>
                            </div>
                            <div className="colorReloj" onClick={() => handleColorChange('pink')}>
                                <img src={colorImages.pink} alt="Modelo de Smartwatch en rosa" /><p>Lilac Bliss</p>
                            </div>
                            <div className="colorReloj" onClick={() => handleColorChange('yellow')}>
                                <img src={colorImages.yellow} alt="Modelo de Smartwatch en amarillo" /><p>Morning Glow</p>
                            </div>
                        </div>
                    </div>

                    <div className="modeloCompra">
                        <h2>99,95 €</h2>
                        <hr />
                        <div className="compraAñadir">
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                            <button>Add to Cart</button>
                        </div>

                        <div className="modeloEnvío">
                            <img src="src\assets\img\icons\Delivery.svg" alt="Icono de envíos" />
                            <p>Delivers  29 Apr to <span>08023</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WatchesProducto;
