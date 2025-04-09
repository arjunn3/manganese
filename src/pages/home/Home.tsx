import React from "react";
import "./Home.css";
import NavigationBar from "../../components/navigation-bar/NavigationBar";

const Home = (): React.ReactNode => {
  return (
    <div className="home-root">
      <NavigationBar />
    </div>
  );
};

export default Home;
