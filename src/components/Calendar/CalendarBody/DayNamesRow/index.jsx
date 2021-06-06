import React from 'react'
import DayName from "./DayName";
import { NAME_OF_DAYS } from "../../../../common/js/calendar_constants";
import style from "./DayNamesRow.module.sass";

function DayNamesRow() {
  return (
    <div className={style.calendarRow}>
      {
        NAME_OF_DAYS.map((day, index) => {
          return <DayName key={`day-${index}`} caption={day[0].toUpperCase()} />
        })
      }
    </div>
  )
}

export default DayNamesRow;
