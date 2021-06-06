import React from "react";
import style from "./Arrow.module.scss";
import PropTypes from "prop-types";

const Arrow = ({handler, direction}) => {
  return <div onClick={handler} className={direction.toLowerCase() === "left" ? style.leftArrow : style.rightArrow}></div>
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