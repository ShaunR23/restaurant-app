import { useState } from "react";
import MenuList from "./MenuList";
import Order from "./Order";
import MENU from "./MenuItems";
import Header from "../styling/Header";

function App(props) {
  const [menu, setMenu] = useState(MENU);
  const [total, setTotal] = useState(0);
  const [newOrder, setNewOrder] = useState([]);
  const [screen, setScreen] = useState(false);

  const typeTaco = menu.filter((menu) => menu.type === "Entree/Taco");

  const typeSteak = menu.filter((menu) => menu.type === "Entree/Steak");

  const typeSide = menu.filter((menu) => menu.type === "Side");

  const typeDessert = menu.filter((menu) => menu.type === "Dessert");

  const order = (item, price) => {
    const newOrderItem = {
      item,
      price,
    };
    setNewOrder([...newOrder, newOrderItem]);
  };
  const subtotal = (price) => {
    setTotal(total + price);
  };

  const orderDisplay = newOrder.map((item) => (
    <Order {...item} order={order} subtotal={subtotal} />
  ));

  const tacoDisplay = typeTaco.map((menu) => (
    <MenuList Key={menu.id} {...menu} subtotal={subtotal} order={order} />
  ));

  const steakDisplay = typeSteak.map((menu) => (
    <MenuList Key={menu.id} {...menu} subtotal={subtotal} order={order} />
  ));

  const sidesDisplay = typeSide.map((menu) => (
    <MenuList Key={menu.id} {...menu} subtotal={subtotal} order={order} />
  ));

  const dessertDisplay = typeDessert.map((menu) => (
    <MenuList Key={menu.id} {...menu} subtotal={subtotal} order={order} />
  ));

  const menuScreen = (
    <>
      <p>Your Total is ${total}.00</p>
      <button onClick={() => setScreen(true)}>Your Order</button>
      <div class="row">
        <h2>Tacos</h2>
        <div id="Tacos" class="display col-md-6 col-lg-3">
          {tacoDisplay}
        </div>
        <h2>Steaks</h2>
        <div id="Steaks" class="display col-md-6 col-lg-3">
          {steakDisplay}
        </div>
        <h2>Sides</h2>
        <div id="Sides" class="display col-md-6 col-lg-3">
          {sidesDisplay}
        </div>
        <h2>Dessert</h2>
        <div id="Desserts" class="display  col-md-6 col-lg-3">
          {dessertDisplay}
        </div>
      </div>
    </>
  );

  const payNow = () => {
    if (localStorage.getItem("orders")) {
      var orders = JSON.parse(localStorage.getItem("orders"));
      orders.push(newOrder);
    } else {
      var orders = [newOrder];
    }

    localStorage.setItem("orders", JSON.stringify(orders));

    setTotal(0);
    setNewOrder([]);
    setScreen(false);
  };
  const myOrder = (
    <>
      <div class="order-display">
        {orderDisplay}
        Your total is ${total}.00
        <button type="button" onClick={payNow}>
          Pay Now
        </button>
      </div>
    </>
  );

  return (
    <>
      <Header />
      {screen ? myOrder : menuScreen}
    </>
  );
}

export default App;
