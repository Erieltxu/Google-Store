import React from 'react'
import './CartMain.css'

 const CartMain = () => {
    return (
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
       
       <button>Complete the puschase</button>
     </div>
     </div>
    )
}
export default CartMain
//<input type="number" value="1">
    //   <button>Add to Cart</button>