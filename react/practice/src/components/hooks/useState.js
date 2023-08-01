import { useState } from "react";

function UseState() {
  const [student, setStudent] = useState("Hakeeb");
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  const handleBtn = () => {
    setStudent("Dami");
  };

  const decrement = () => {
    return counter >= 1 ? setCounter(counter - 1) : null;
  };

  // let student = "Hakeeb";

  let style = {
    fontSize: "60px",
    // textAlign: "center",
  };

  let design = { fontSize: "60px", textAlign: "center" };

  let btnStyle = {
    width: "90px",
    height: "30px",
    position: "relative",
    top: "12px",
    margin: "20px",
  };
  return (
    <div style={design}>
      <p>{student}</p>
      <button onClick={handleBtn}>changeName</button>
      <div>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button style={btnStyle} onClick={decrement}>
            -
          </button>
          <p>{counter}</p>
          <button style={btnStyle} onClick={increment}>
            +
          </button>
        </span>
      </div>
    </div>
  );
}

export default UseState;
