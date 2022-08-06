import React from "react";
import nativeData from "./Data";
import LeftDetail from "./LeftDetail";
import RightDetail from "./RightDetail";
import Card from "./Card"

const CardList = () => {
  return (
    <div>
      <Card>
          <div className="cardlist">
            <div className="left">
              {nativeData.map((data) => (
                <LeftDetail data={data} key={data.id} />
              ))}
            </div>
            <div className="cardright">
              {nativeData.map((data) => (
                <RightDetail props={data} key={data.id} />
              ))}
            </div>
          </div>
      </Card>
      
    </div>
  );
};

export default CardList;
