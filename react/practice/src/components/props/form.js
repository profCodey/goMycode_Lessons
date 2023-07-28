import React from "react";

export default function Form(props) {

  let labelStyle = {
    fontSize: "25px",
    marginBottom: "300px",
    marginTop: "100px",
  };

  let inuptStyle = {
    width: "300px",
    height: "30px",
    fontSize: "25px",
    padding: "20px 10px",
  };

  return (
    <div>
      <form style={{ marginLeft: "30px" }}>
        <label style={labelStyle}>
            {props.text1}:
          <input type="text" style={inuptStyle} />
          <br />
        </label>

        <br />
        <label style={labelStyle}>
          {props.text2}
          <input type="text" style={inuptStyle} />
          <br />
        </label>

        <br />
        <label style={labelStyle}>
          <span style={{ width: "60px" }}>Email:</span>
          <input type="email" style={inuptStyle} />
          <br />
        </label>

        <br />
        <label style={labelStyle}>
          Password:
          <input type="password" style={inuptStyle} />
          <br />
        </label>
      </form>
    </div>
  );
}
