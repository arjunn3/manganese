import React from "react";

import "./Product.css";
import { useNavigate } from "react-router";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import Container from "../../components/container/Container";

const Product = (): React.ReactNode => {
  const navigate = useNavigate();

  return (
    <>
      <NavigationBar />
      <Container>
        <div className="product-root">
          <h1>Product Route</h1>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Go back to Home
          </button>
        </div>
      </Container>
    </>
  );
};

export default Product;
