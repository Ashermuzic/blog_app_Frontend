import React from "react";
import "./skeleton.scss";

function Skeleton() {
  return (
    <div>
      <div className="main"></div>
      <div className="skeleton">
        <div className="left">
          <div className="title"></div>
          <div className="desc">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="button"></div>
        </div>
        <div className="right">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
