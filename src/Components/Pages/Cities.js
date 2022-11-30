import React from "react";
import CitySelect from "../CitySelect/CitySelect";
// import Content from "../Shared/Content/Content";
import Header from "../Shared/Header/Header";
import Sidebar from "../Shared/Sidebar/Sidebar";

const Cities = (props) => {
  let{state,setState} = props;
  let tabs = [
    {
      tabName: "Home",
    },
    {
      tabName: "Cities",
    },
    {
      tabName:"Dev",
    }
  ];
  return (
    <>
      <Header title={"welcome to weather App"} />
      <div className="container">
        <Sidebar tabs={tabs}  state={state} setState={setState} />
        <CitySelect />
      </div>
    </>
  );
};

export default Cities;
