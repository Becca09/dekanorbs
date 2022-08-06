import React from "react";
import "../components/CSS/card.css";


const Card = (props) => {
  return (
    <div className="card">
      <div className="left">
        <div>Cohort Name: Dekanorbs</div>
        <div>
          <h5>Airnest</h5>
          <p>Cultist</p>
        </div>
      </div>

      <div className="right">
        <p>Backend</p>
        <p>Food</p>
        <p>Mech Engin</p>
      </div>
    </div>
  );
};

export default Card;
