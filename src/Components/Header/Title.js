import React from "react";

const titleStyle = {
  width: "fit-content",
  position: "relative",
  display: "grid",
  placeItems: "center",
};

const Title = ({ text }) => {
  return (
    <div>
      <h1>
        <span id="js-rotating"> {text || "TITOLO"}</span>
      </h1>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
