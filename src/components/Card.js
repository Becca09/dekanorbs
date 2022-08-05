import React from "react";
import  "../components/CSS/card.css"
// import CardItem from "./CardItem";
// import nativeData from "./Data";
// import LeftDetail from "./LeftDetail";
// import RightDetail from "./RightDetail";


const Card = (props) => {  
        return(
          <div className="card">
           <div className="right">
                    <div>Cohort Name: Dekanorbs</div>
                    <div>
                      <h5>Airnest</h5>
                        <p>Cultist</p>
                    </div>
            </div> 

            <div className="left">
                    <p>Backend</p>
                    <p>Food</p>
                    <p>Mech Engin</p>
                   
            </div> 
          </div>
      //     <div className="card">
      //       <div className="">
      //   {nativeData.map((data) => (
      //     <LeftDetail data={data} key={data.id} />
      //   ))}
      // </div>
      // <div className="cardright">
      //   {nativeData.map((data) => (
      //     <RightDetail props={data} key={data.id} />
      //   ))}
      // </div>
      //     </div>
      // <div>
       
        )
   
  
};

export default Card;
