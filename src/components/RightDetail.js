import React from "react";

const RightDetail = ({ props }) => {
  return (
    <div>
      <div>{props.skill[0]}</div>
      <div>{props.skill[1]}</div>
      <div>{props.skill[2]}</div>
    </div>
  );
};

export default RightDetail;
