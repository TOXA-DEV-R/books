import React from "react";
import Header from "../../components/header/Header";
import Searching from "../../components/search/Searching";
import Tabs from "../../components/tabs/Tabs";

const Home = () => {
  return (
    <div id="basic">
      <Header />
      <Searching />
      <Tabs />
    </div>
  );
};

export default Home;
