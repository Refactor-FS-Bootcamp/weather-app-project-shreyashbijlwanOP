import React, { useState } from "react";
import { Cities } from "../city_list";

export const ContextProvider = React.createContext();

export const CustomContext = ({ children }) => {
  const [unselectedCities, setUnselectedCities] = useState(Cities);
  const [selectedCities, setSelectedCities] = useState([])
  const [cityDesc, setCityDesc] = useState({})
  const [favCities, setFavCities] = useState([])

  const value = {unselectedCities,setUnselectedCities,selectedCities, setSelectedCities,cityDesc,setCityDesc, favCities,setFavCities};

  return <ContextProvider.Provider value={value}>{children}</ContextProvider.Provider>;
};


