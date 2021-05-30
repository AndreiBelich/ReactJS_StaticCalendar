import React from 'react';
import PropTypes from "prop-types";
import {DAYS_PER_WEEK} from "../../common/js";
import style from "./CalendarBody.module.scss";

function CalendarBody({fullDate, nameOfDays, calendarBody}) {
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

CalendarBody.defaultProps = {
  fullDate: "January 2021",
  nameOfDays: ["S", "M", "T", "W", "T", "F", "S"],
  calendarBody: [
    new Array(DAYS_PER_WEEK).fill(1),
    new Array(DAYS_PER_WEEK).fill(1),
    new Array(DAYS_PER_WEEK).fill(1),
    new Array(DAYS_PER_WEEK).fill(1),
    new Array(DAYS_PER_WEEK).fill(1),
  ]
};

CalendarBody.propTypes = {
  fullDate: PropTypes.string.isRequired,
  nameOfDays: PropTypes.array.isRequired,
  calendarBody: PropTypes.array.isRequired
};

export default CalendarBody;
