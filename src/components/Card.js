import React from "react";
import  "../components/CSS/card.css"
// import CardItem from "./CardItem";
import nativeData from "./Data";
import LeftDetail from "./LeftDetail";
import RightDetail from "./RightDetail";


const Card = (props) => {  
        return(
          <div className="card">
            <div className="">
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
      // <div>
      //   <div>{props.title}</div>
      //   <div>
      //     <h2>{props.name}</h2>
      //     <div>
      //       {props.jobs.map(job => <p>{job}</p>)}
      //     </div>
      //     <p>props.profession</p>
      //   </div>
      // </div>
        )
   
  
};

export default Card;
