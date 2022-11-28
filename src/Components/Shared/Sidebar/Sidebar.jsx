import React, { useState } from "react";
import Tab from "../Tabs/Tab";
import SidebarStyle, { active } from "./style";

const Sidebar = (props) => {
  const { tabs } = props;
  const [state, setState] = useState("Home");
  function HandleClick(value) {
    setState(value);
    console.log("S");
  }

  return (
    <nav style={SidebarStyle}>
      {tabs.map((tab) => {
       return (state === tab.tabName ? (
          <Tab key ={tab.tabName} name={tab.tabName} active={active} HandleClick={HandleClick} />
        ) : (
          <Tab name={tab.tabName} key ={tab.tabName}  HandleClick={HandleClick} />
        ))
      })}
    </nav>
  );
};

export default Sidebar;
