  
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Cart({ removeItem, incrementQuantity, decrementQuantity }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const cart = useSelector(state => state.cart);
  const inventory = useSelector(state => state.inventory);

  const cartItems = cart.map((item) => ( {...inventory[item.productId], id: item.productId, quantity: item.quantity} ))
  const cartTotal = cartItems.reduce((acc, item) => {
    return acc += item.price * item.quantity;
  }, 0)

  const displayItems = cartItems.map((item) => (
    <div key={item.id} id={item.id}>
      <p><b>{item.name}</b></p>    
      <p>${item.price}</p>    
      <p>Quantity: {item.quantity}  <Button color="info" size="sm" onClick={() => {incrementQuantity(item.id)}}>+</Button> <Button color="info" size="sm" onClick={() => {decrementQuantity(item.id)}}>-</Button></p>
      <Button onClick={() => {removeItem(item.id)}} color="danger">Remove</Button>
    </div>
  ))

  return (
    <div className="d-inline-block ml-5">
    <Button color="secondary" onClick={toggle}>Cart</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Shopping Cart</ModalHeader>
        <ModalBody>
          {displayItems}
          <span className="d-block text-right">Total: ${cartTotal}</span>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Checkout</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
