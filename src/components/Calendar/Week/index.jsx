import React from "react";
import CalendarDay from "../CalendarDay";
import style from "./Week.module.scss";

function Week({weekData, currentDate}){
  return (
    <div className={style.calendarRow}>
      {
        weekData.map((day, index) =>{
          return (
            <CalendarDay key={`day-${index}`}
                         caption={`${day}` === "0" ? "" : `${day}`}
                         isCurrentDay={currentDate === day}/>
          )
        })
      }
    </div>
  )
}

export default Week;