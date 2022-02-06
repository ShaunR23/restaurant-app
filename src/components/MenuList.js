import Order from "./Order";
import MENU from "./MenuItems";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

function MenuList({item, price,description, subtotal,order, img}) {
    
    const addToOrder = (e) => {
        e.preventDefault()
        subtotal(price);
        order(item,price)
    }

   
    return (
        <Card style={{ width: '19rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{item}</Card.Title>
          <Card.Text>
           {description}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#"><Button type='button' onClick = {addToOrder} variant="outline-success">Add To Order</Button>{' '}</Card.Link>
          <Card.Link href="#">${price}.00</Card.Link>
        </Card.Body>
      </Card>
    );
  }

  export default MenuList;