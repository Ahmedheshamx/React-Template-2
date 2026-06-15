import React from "react";
import Card from "react-bootstrap/Card";
import "../css/card.css";
// import { Link } from "react-router-dom";


const CardComponent = ({ title, description, image ,minPrice, maxPrice ,area,units,city }) => {
  return (

    


    <Card className="card shadow" >
      <Card.Img variant="top" src={image} alt="Card image" className="card-image"  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="description description-card">{description}</Card.Text>
        <div className="card-info">
          <p>السعر  <span>{Number(minPrice).toLocaleString("ar-EG")}-{Number(maxPrice).toLocaleString("ar-EG")}</span></p>
          <p> المدينة <span>{city ? city : "غير متوفره"}</span></p>
          <p>المساحة <span>{area ? area : "غير متوفره"} </span></p>
          <p> الوحدات<span>{units ? units : "غير متوفره"}</span></p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
