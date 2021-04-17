import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>

      <Row>
     
        {
            products && 
            products.map((product) => (

            // <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3"></div>
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product products_data={product} />
            </Col>
        ))}
        
      </Row>
    </>
  );
};

export default HomeScreen;
