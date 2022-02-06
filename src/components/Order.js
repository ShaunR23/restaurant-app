import { useState } from "react";

function Order({subtotal, addToOrder}){
   
    console.log(addToOrder)
    return (
        <h2>{subtotal}</h2>
      );
    
}

export default Order;