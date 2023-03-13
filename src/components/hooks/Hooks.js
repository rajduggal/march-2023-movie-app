// import { useEffect } from "react";
import React, { useState } from "react";

const hookStyle = {
  background: "#C1E1C1",
  margin: "10px 0",
  padding: "10px",
};

const HooksRef = () => {
    const [color, setColor] = useState("red");

  return (
    <>
    <div style = {hookStyle}>
        <h2>My favorite color is {color}!</h2>
        <button
            type="button"
            onClick={() => setColor("blue")}
        >Blue</button>&nbsp;
        <button
            type="button"
            onClick={() => setColor("red")}
        >Red</button>&nbsp;
        <button
            type="button"
            onClick={() => setColor("pink")}
        >Pink</button>&nbsp;
        <button
            type="button"
            onClick={() => setColor("green")}
        >Green</button>
    </div>
    <br/>
    <hr/>
    </>
  );
};

export default HooksRef;
