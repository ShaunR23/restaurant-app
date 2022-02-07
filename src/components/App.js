import { useState } from 'react';
import MenuList from './MenuList';
import Order from './Order';
import MENU from './MenuItems';
import Header from '../styling/Header';





function App() {

  const [menu, setMenu] = useState(MENU);
  const [total, setTotal] = useState(0);
  const [newOrder, setNewOrder] = useState([]);

  const order = (item,price) =>{
      const newOrderItem = {
        item,
        price,
      }
      setNewOrder([...newOrder, newOrderItem]);
    };
  const subtotal = (price) => {
    setTotal(total + price)
  };
    

  const typeTaco = menu.filter(menu =>(
    menu.type === 'Entree/Taco'
  ));

  const typeSteak = menu.filter(menu =>(
    menu.type === 'Entree/Steak'
  ));

  const typeSide = menu.filter(menu =>(
    menu.type === 'Side'
  ));

  const typeDessert = menu.filter(menu =>(
    menu.type === 'Dessert'
  ));

  const tacoDisplay = typeTaco.map(menu => (
    <MenuList Key = {menu.id} {...menu} subtotal = {subtotal} order = {order} />
  ));

  const steakDisplay = typeSteak.map(menu => (
    <MenuList Key = {menu.id} {...menu} subtotal = {subtotal} order = {order} />
  ));

  const sidesDisplay = typeSide.map(menu => (
    <MenuList Key = {menu.id} {...menu} subtotal = {subtotal} order = {order} />
  ));

  const dessertDisplay = typeDessert.map(menu => (
    <MenuList Key = {menu.id} {...menu} subtotal = {subtotal} order = {order} />
  ));

  
  const orderDisplay = newOrder.map( item => (
     <Order {...item} order = {order} subtotal = {subtotal} />
  ));
  
  const payNow = () =>{
    let previousPayment = localStorage.getItem(newOrder);
    localStorage.setItem(newOrder, JSON.stringify([newOrder, previousPayment]));
    setTotal(0);
    setNewOrder(0);
  }
  
  return (
    <>
    <Header />
    
    
    <button type='button' onClick = {payNow}>Pay Now</button>
    <div>
   {orderDisplay}
   </div>
    <p>Your Total is ${total}.00</p>
    
    <h2>Tacos</h2>
   <div id='Tacos' class = 'display'>
      {tacoDisplay}
    </div>
    <h2>Steaks</h2>
    <div id='Steaks' class = 'display'>
      {steakDisplay}
    </div>
    <h2>Sides</h2>
    <div id='Sides' class = 'display'>
      {sidesDisplay}
    </div>
    <h2>Dessert</h2>
    <div id="Desserts" class = 'display'>
      {dessertDisplay}
    </div>
   
    <Order />
    </>
  );
}

export default App;
