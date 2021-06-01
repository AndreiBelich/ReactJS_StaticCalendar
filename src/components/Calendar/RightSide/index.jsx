import React from "react";
import Month from "./Month";
import CalendarBody from "./CalendarBody";
import DayNamesRow from "./DayNamesRow";
import style from "./RightSide.module.scss";

const RightSide = ({currentMonth, currentYear, calendarData, currentDate}) => {
  return (
    <div className={style.rightSide}>
      <h2>{`${currentMonth} ${currentYear}`}</h2>
      <DayNamesRow/>
      <CalendarBody>
        <Month calendarData={calendarData} currentDate={currentDate}/>
      </CalendarBody>
    </div>
  )
}

export default RightSide;