import React,{useEffect} from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.js";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const HomeScreen = () => {

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;
  // console.log(products);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // const [products, setProducts] = useState([]);

  // useEffect(() => {

  // const fetechProduct = async () =>
  // {
  //   const {data} = await axios.get('/api/product/getallproducts/');

  //   setProducts(data)
  // }

  // fetechProduct();
  
  // }, []);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products &&
            products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product products_data={product} />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;