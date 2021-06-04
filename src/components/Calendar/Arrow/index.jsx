import React from "react";
import style from "./Arrow.module.scss";

const Arrow = ({handler, direction}) => {
  return <div onClick={handler} className={direction === "left" ? style.leftArrow : style.rightArrow}></div>
}

export default Arrow;