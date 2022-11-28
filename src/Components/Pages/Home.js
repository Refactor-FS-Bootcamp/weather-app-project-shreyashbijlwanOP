import React from "react";
import Content from "../Shared/Content/Content";
import Header from "../Shared/Header/Header";
import Sidebar from "../Shared/Sidebar/Sidebar";

const Home = () => {
  let tabs = [
    {
      tabName: "Home",
    },
    {
      tabName: "Cities",
    },
  ];
  return (
    <>
      <Header title={"welcome to weather App"} />
      <div className="container">
        <Sidebar tabs={tabs} />
        <Content />
      </div>
    </>
  );
};

export default Home;
