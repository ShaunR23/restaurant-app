import { useState } from "react";

function Order({item, price, subtotal, addToOrder, order, total }){
   
    
    
    return (
        <p>{item} ${price}.00</p>
      );
    
}

export default Order;