import React from "react";
import "../../style/CSS/LoadingMask/loadingMask.css";
import Tech from "../../style/image/tech1.png"
import Tech2 from "../../style/image/tech2.png"
import Tech3 from "../../style/image/tech3.png"

function LoadingMask() {
  return (
    <div className="box-container">
      <div className="box" id="technology">
        <p>TECHOLOGY</p>
        <img src={Tech} className="tech-image tech" alt="img" />
      </div>

      <div className="box" id="knowledge">
        <p>KNOWLEDGE</p>
        <img src={Tech2} className="tech-image know" alt="img" />
      </div>

      <div className="box" id="fun">
        <p>FUN</p>
        <img src={Tech3} className="tech-image fun" alt="img" />
      </div>

      <div className="box" id="technology2">
        <p>TECHOLOGY</p>
        <img src={Tech} className="tech-image tech" alt="img" />
      </div>

      <div className="box" id="knowledge2">
        <p>KNOWLEDGE</p>
        <img src={Tech2} className="tech-image know" alt="img" />
      </div>

      <div className="box" id="fun2">
        <p>FUN</p>
        <img src={Tech3} className="tech-image fun" alt="kép" />
      </div>
    </div>
  );
}

export default LoadingMask;
