import React from 'react';
import style from "./DayName.module.scss";

function DayName({caption}) {
  return (
    <div className={`${style.dayStyle} ${style.calendarDay}`}>
      {caption}
    </div>
  )
}

export default DayName;
