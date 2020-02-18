import React from "react";

const Card = ({ image, description }) => {
  return (
    <div className="imgCard">
      <img src={image} alt={name} /> <p> {description} </p>{" "}
    </div>
  );
};

export default Card;
