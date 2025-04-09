import React from "react";
import "./Home.css";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import Container from "../../components/container/Container";

const Home = (): React.ReactNode => {
  return (
    <>
      <NavigationBar />
      <Container></Container>
    </>
  );
};

export default Home;
