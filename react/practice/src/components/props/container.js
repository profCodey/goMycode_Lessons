import React from "react";

function Container({children}) {
  let containerStyle = {
    backgroundColor: "black",
    width: "400px",
    height: "400px",
  };
    return <div style={containerStyle}>
    {children}
  </div>;
}

export default Container;
