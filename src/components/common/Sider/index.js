import React, { useState } from "react";
import { SiderWrapper } from "./sider-style";
import { Link } from "react-router-dom";

const SiderTab = (props) => {
  const { link, name, customStyle, handleClick } = props;

  return (
    <Link to={link}>
      <li style={customStyle} className="sider-content" onClick={handleClick}>
        {name}
      </li>
    </Link>
  );
};

const Sider = () => {
  const [act, setAct] = useState("home");

  const customStyle = {
    styleHome: {
      backgroundColor: act === "home" ? "#ffce5f" : "",
      color: act === "home" ? "#633ea5" : "white",
      fontSize: "18px",
      padding: "15px 0px",
    },

    styleCity: {
      backgroundColor: act === "cities" ? "#ffce5f" : "",
      color: act === "cities" ? "#633ea5" : "white",
      fontSize: "18px",
      padding: "15px 0px",
    },
  };

  const clickHome = () => {
    return setAct("home");
  };

  const clickCity = () => {
    return setAct("cities");
  };

  return (
    <>
      <SiderWrapper>
        <ul>
          <SiderTab
            link="/"
            name="Home"
            customStyle={customStyle.styleHome}
            handleClick={clickHome}
          />
          <SiderTab
            link="cities"
            name="Cities"
            customStyle={customStyle.styleCity}
            handleClick={clickCity}
          />
        </ul>
      </SiderWrapper>
    </>
  );
};

export default Sider;
