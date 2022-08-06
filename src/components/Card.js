import React from "react";
import "../components/CSS/card.css";


const Card = ({native}) => {
  return (
    <div className="card">
      <div className="left">
        <div>Cohort Name: {native.cohortName}</div>
        <div>
          <h5>{native.fullName}</h5>
          <p>{native.nickName}</p>
        </div>
      </div>

      <div className="right">
        <p>{native.skills[0]}</p>
        <p>{native.skills[1]}</p>
        <p>{native.skills[2]}</p>
       
      </div>
    </div>
  );
};

export default Card;
