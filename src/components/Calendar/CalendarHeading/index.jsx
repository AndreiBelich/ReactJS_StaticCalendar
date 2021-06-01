import React from "react";
import style from "./CalendarHeading.module.scss";

const CalendarHeading = ({caption}) => {
  return (
    <h2 className={style.dayCaption}>{caption}</h2>
  );
}

export default CalendarHeading;