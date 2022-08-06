import React from "react";
import nativeData from "./Data";
import Card from "./Card"
import "../components/CSS/card.css";


const CardList = () => {
  return (
    <div>
          <div className="cardlist">
              {nativeData.map((data) => (
                <Card data={data} key={data.id} />
              ))}
            
          </div>      
    </div>
  );
};

export default CardList;
