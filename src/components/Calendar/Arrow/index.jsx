import React from "react";
import style from "./Arrow.module.sass";
import PropTypes from "prop-types";

const Arrow = ({handler, direction}) => {
  return <div onClick={handler} className={`${style.arrow} ${direction.toLowerCase() === "left" ? style.leftArrow : style.rightArrow}`}></div>
}

Arrow.defaultProps = {
  handler: () => {},
  direction : "left"
};

Arrow.propTypes = {
  handler: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired
};

export default Arrow;