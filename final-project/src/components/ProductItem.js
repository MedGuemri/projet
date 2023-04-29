import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductItem = () => {
  const products = useSelector((state) => state.allProducts.products);
  const navigate = useNavigate()
  const renderList = products.map((product) => {
    const { title, category, price, image, id } = product;
    return (
      <Col key={id} md="4">
        <Card style={{ width: '18rem', height: '100%'}}>
          <Card.Img variant="top" src={image} alt={title} />
          <Card.Body>
            <Card.Title>{title} </Card.Title>
            <Card.Text>{price}</Card.Text>
            <Card.Text>{category}</Card.Text>
            <Button variant="primary" onClick={()=>navigate(`/products/product/${id}`)}>Read More</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return <Container><Row>{renderList}</Row></Container>;
};

export default ProductItem;

