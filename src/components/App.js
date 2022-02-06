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
  console.log(typeTaco)
  console.log(typeSteak)
  console.log(typeSide)
  console.log(typeDessert)
  console.log(tacoDisplay)
  return (
    <>
    <Header />
    <Order />
    
    <div>
      <h3 className='menuHeader'>Menu</h3>
                    
                        {tacoDisplay}
    </div>
    </>
  );
}

export default App;
