import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h2> {props.name}</h2>
      <img src={props.img} alt={props.name} />
      <h4> {props.year}</h4>
      <h5> {props.alias}</h5>
      <h6> {props.party}</h6>
    </div>
  );
};

export default Card;
