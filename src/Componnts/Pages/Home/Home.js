import React, { useContext, useState } from "react";

import Model from "../../Shared/Model/Model";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Wrapper from "../../Shared/Wrapper/Wrapper";
import HomeContent from "./HomeContent";

const Home = () => {

  return (
    <Wrapper>
      <Sidebar />
      <HomeContent />
      {/* <Model />  */}
    </Wrapper>
  );
};

export default Home;
