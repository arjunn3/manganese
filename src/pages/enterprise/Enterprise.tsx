import React from "react";

import "./Enterprise.css";
import { useNavigate } from "react-router";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import Container from "../../components/container/Container";

const Enterprise = (): React.ReactNode => {
  const navigate = useNavigate();

  return (
    <>
      <NavigationBar />
      <Container>
        <div className="enterprise-root">
          <h1>Enterprise Route</h1>
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

export default Enterprise;
