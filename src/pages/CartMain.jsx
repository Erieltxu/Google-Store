import React from 'react'
import './CartMain.css'

 const CartMain = () => {
    return (
      <div class="cartmain">
        <a href='/'> Ir home</a>
      <div class ="title"><h2>Cart</h2>
           <a>(3 items)</a></div>
       <div class="imagenProducto">
      <img  class ="Producto" src="src\assets\img\earbuds\caja\earbuds_01_celeste.png" alt="Foto de reloj"/>
       <div  class="Descripcion"><p>Google Pixel Buds Pro in light blue</p>
      <p>Cant<select></select>€</p>
      <a>remove</a></div>

       <div class="IconEnvíos"><img src="src\assets\img\icons\Delivery.svg" alt="Icono de envíos"/>
        <p>Delivers  29 Apr to <span>08023</span></p></div></div>
    

      <div class="modeloCompra">
      <h3>Order Summary</h3>
      <div class = "ticket">
      <p>Subtotal</p>
      <p>Shipping costs</p>
      <p>estimated VAT</p><p>Including</p>
      </div>
       <hr/>
       <p>Total estimated</p>
      <div class="terminos">
       
       <p>or €144,60/month</p>
       <p>with 3 monthly installments *</p></div>
     <div class="compraAñadir">
       
       <button>Complete the puschase</button></div>
       
     </div>
     </div>
     
    )
}
export default CartMain
//<input type="number" value="1">
    //   <button>Add to Cart</button>