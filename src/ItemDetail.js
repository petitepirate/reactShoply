import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function ItemDetail( { addItem } ) {
  const { id } = useParams();
  const inventory = useSelector(state => state.inventory);
  const product = inventory[id];
  

  return (
  <Col sm="6" className="mb-3">
    <Card id={id}>
      <CardImg top width="90%" src={product.image_url} alt={`Image of ${product.name}`} />
      <CardBody>
        <CardTitle>
          {product.name}
        </CardTitle>
        <CardSubtitle>
          ${product.price}
        </CardSubtitle>
        <CardText>
          {product.description}
        </CardText>
        <Button type="button" color="info" onClick={() => {addItem(id)}}>Add to Cart</Button>
      </CardBody>
    </Card>
  </Col>
  )
}
