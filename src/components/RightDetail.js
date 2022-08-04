import React from "react";

const RightDetail = ({ props }) => {
  return (
    <div>
      <div>{props.skills[0]}</div>
      <div>{props.skills[1]}</div>
      <div>{props.skills[2]}</div>
    </div>
  );
};

export default RightDetail;
