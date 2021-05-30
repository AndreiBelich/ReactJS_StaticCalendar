import React from 'react';
import style from "./CalendarDay.module.scss";

function CalendarDay({caption, isCurrentDay}) {
  return (
    <div className={`${style.calendarDay} ${isCurrentDay ? style.currentDate : ""}`.trim()}>{caption}</div>
  )
}

export default CalendarDay;
