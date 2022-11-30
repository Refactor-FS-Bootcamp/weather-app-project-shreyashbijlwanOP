import React from "react";
import { Link } from "react-router-dom";
import Tab from "../Tabs/Tab";
import SidebarStyle, { active } from "./style";

const Sidebar = (props) => {
  const { tabs,state,setState } = props;
  
  function HandleClick(value,fun) {
    fun(value);
    console.log(" S ");
  }

  return (
    <nav style={SidebarStyle}>
      {tabs.map((tab) => {
       return (state === tab.tabName ? (
        <Link className="underline" key ={tab.tabName} to={`/${tab.tabName}`}>  <Tab  name={tab.tabName} active={active} HandleClick={(e)=>{HandleClick(tab.tabName,setState)}} /> </Link>
        ) : (
      <Link className="underline" key ={tab.tabName} to={`/${tab.tabName}`}> <Tab name={tab.tabName}   HandleClick={(e)=>{HandleClick(tab.tabName,setState)}} /> </Link>
        ))
      })}
    </nav>
  );
};

export default Sidebar;
