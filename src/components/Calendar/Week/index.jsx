import React from "react";
import CalendarDay from "../CalendarDay";
import style from "./Week.module.scss";

function Week({weekData}){
  return (
    <div className={style.calendarRow}>
      {
        weekData.map((day, index) =>{
          return (
            <CalendarDay key={`day-${index}`}
                         caption={`${day}` === "0" ? "" : `${day}`}
                         isCurrentDay={false}/>
          )
        })
      }
    </div>
  )
}

export default Week;

/**
 * <div key={`week-${index}`} className={style.calendarRow}>
        {
          week.map((day, index) => {
            return (
              <CalendarDay key={`day-${index}`}
                           caption={`${day}` === "0" ? "" : `${day}`}
                           isCurrentDay={day === currentDate} />
            )
          })
        }
 */