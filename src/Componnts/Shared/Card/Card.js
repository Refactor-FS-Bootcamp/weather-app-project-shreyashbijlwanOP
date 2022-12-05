import React from "react";
import YellowStar from "../Stars/YellowStar";

const Card = (props) => {
  return (
    <div className="home-card">
      <div className="card-header">
        <p className="card-title">{props.cityName}</p>
        <YellowStar />
      </div>
      <div className="card-status">Clear with periodic clouds</div>
      <div className="temp"><strong>Temperature : </strong>{props.temp}<sup><small>o</small></sup>C</div>
      <div className="humid"><strong>Humidity : </strong>{props.humid}%</div>
    </div>
  );
};

export default Card;
