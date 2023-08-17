import React from "react";
import PropTypes from "prop-types";

function Button({btns, buttonCSS}) {
  return <button style={buttonCSS}>{btns}</button>;
}


Button.propTypes = {
  btns: PropTypes.string.isRequired,
};


export default Button;

let data = 'eighteen';

<Button btns={data} />