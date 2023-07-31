import { useState } from "react";

function UseState() {
  const [myName, setMyName] = useState("Dami");

  let style = {
    fontSize: "60px",
    // textAlign: "center",
  };

  //   let name = "Hakeeb";

  function handleChange() {
    setMyName("Hakeeb");
  }

  return (
    <div style={style}>
      <p>{myName}</p>
      <button onClick={handleChange}>changeName</button>
    </div>
  );
}

export default UseState;
