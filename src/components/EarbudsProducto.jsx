import React, {useState} from "react";
import ColorButton from "./ColorButton";


const EarbudsProduct = ({ selectedColor, selectedImage, handleColorChange }) => {
    const colors = ["celeste", "beige", "negro", "gris", "verde", "terracota"];
    const colorMap = {
        celeste: '#9EC6EA',
        beige: '#E7E3E0',
        negro: '#353A49',
        gris: '#D1D7DA',
        verde: '#DFE6B6',
        terracota: '#E08571'
    };

    return (
        <section className="earbudsProducto">
            <div className="imagenProducto">
                <img src={`src/assets/img/earbuds/caja/${selectedImage}.png`} alt="Foto del estuche de los Earbuds" />
            </div>
            <div className="producto">
                <div className="modeloProducto">
                    <h2>Google Pixel Buds Pro</h2>
                    <p>Music & Sound</p>
                    <h3>229 €</h3>
                    <hr />
                    <p>Choose a color</p>
                    <div className="modeloColor">
                        {colors.map(color => (
                            <ColorButton
                                key={color}
                                color={colorMap[color]}
                                handleColorChange={() => handleColorChange(color)}
                            />
                        ))}
                    </div>
                </div>

                <div className="modeloCompra">
                    <h2>229 €</h2>
                    <hr />
                    <div className="compraAñadir">
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <button>Add to Cart</button>
                    </div>

                    <div className="modeloEnvío">
                        <img src="src/assets/img/icons/Delivery.svg" alt="Icono de envíos" />
                        <p>Delivers 29 Apr to <span>08023</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EarbudsProduct;