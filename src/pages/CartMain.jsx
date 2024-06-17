import React from 'react'
import './CartMain.css'

const CartMain = () => {
    return (
        <div className="cartmain">
            <div className ="title"><h2>Cart</h2>
            <a>(3 items)</a></div>
        <div className="imagenProductoA">
        <img  className ="Producto" src="src\assets\img\earbuds\caja\earbuds_01_celeste.png" alt="Foto de reloj"/>
        <div  className="Descripcion"><p>Google Pixel Buds Pro in light blue</p>
        <p>Cant<select className='cartSelect'></select>€</p>
        <a className='remove'>remove</a></div>

        <div className="IconEnvíos"><img src="src\assets\img\icons\Delivery.svg" alt="Icono de envíos"/>
          <p>Delivers  29 Apr to <span>08023</span></p></div></div>
      

        <div className="modeloCompraA">
        <h3>Order Summary</h3>
        <div className = "ticket">
        <p>Subtotal</p>
        <p>Shipping costs</p>
        <p>estimated VAT</p><p>Including</p>
        </div>
        <hr/>
        <p>Total estimated</p>
        <div className="terminos">
        
        <p>or €144,60/month</p>
        <p>with 3 monthly installments *</p></div>
      <div className="compraAñadir">
        
        <button>Complete the puschase</button></div>
        
      </div>
      </div>
      
    )
}
export default CartMain
//<input type="number" value="1">
    //   <button>Add to Cart</button>