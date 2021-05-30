import React from 'react';
import PropTypes from "prop-types";
import style from "./CalendarBody.module.scss";

function CalendarBody({fullDate, nameOfDays, calendarBody}) {
  console.log(calendarBody);
  return (
    <>
      <div className={style.rightSide}>
        <h2 className={style.dayCaption}>{fullDate}</h2>
        <div className={style.calendarRow}>{nameOfDays}</div>
        <div>{calendarBody}</div>
      </div>
    </>
  )
}

export default CalendarBody;
