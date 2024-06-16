import React from "react";
import ColorButton from "./ColorButton";


const EarbudsProduct = ({ selectedColor, selectedImage, handleColorChange }) => {
    return (
        <section className="earbudsProducto">
            <a href='/next'> Ir </a>
            <div className="imagenProducto">
                <img src={`src/assets/img/earbuds/caja/${selectedImage}.png`} alt="Foto del estuche de los Earbuds" />
            </div>
            <div className="producto">
                <div className="modeloProducto">
                <h2>Google Pixel Buds Pro</h2>
                <p>Music & Sound</p>
                <h3>229 €</h3>
                <hr/>
                <p>Choose a color</p>
                <div className="modeloColor">
                    <ColorButton color="celeste" handleColorChange={handleColorChange} />
                    <ColorButton color="beige" handleColorChange={handleColorChange} />
                    <ColorButton color="negro" handleColorChange={handleColorChange} />
                    <ColorButton color="gris" handleColorChange={handleColorChange} />
                    <ColorButton color="verde" handleColorChange={handleColorChange} />
                    <ColorButton color="terracota" handleColorChange={handleColorChange} />
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
                    <a href='/cart'><button>Add to Cart</button></a>
                </div>
                
                <div className="modeloEnvío">
                    <img src="src/assets/img/icons/Delivery.svg" alt="Icono de envíos" />
                    <p>Delivers  29 Apr to <span>08023</span></p>
                </div>
                </div>
                
            </div>
        </section>
    );
};

export default EarbudsProduct;