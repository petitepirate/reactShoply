import React from 'react';
import {Link} from 'react-router-dom';
import {
  Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function ShopItem( { id, product, addItem } ) {
  return (
  <Col sm="6" className="mb-3">
    <Card id={id}>
      <CardImg top width="90%" src={product.image_url} alt={`Image of ${product.name}`} />
      <CardBody>
        <CardTitle>
          <Link to={`/products/${id}`}>{product.name}</Link>
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
