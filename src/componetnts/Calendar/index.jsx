import React from 'react';
import style from "./Calendar.module.scss";

function Calendar(props) {
  return (
    <div>
      <div className={style.leftSide}>
        <h2>Friday</h2>
        <p>31</p>
      </div>
    </div>
  )
}

export default Calendar;
