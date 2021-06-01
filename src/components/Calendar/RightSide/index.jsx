import React from "react";
import Month from "./Month";
import CalendarBody from "./CalendarBody";
import DayNamesRow from "./DayNamesRow";
import CalendarHeading from "../CalendarHeading";
import style from "./RightSide.module.scss";

const RightSide = ({currentMonth, currentYear, calendarData, currentDate}) => {
  return (
    <div className={style.rightSide}>
      <CalendarHeading caption={`${currentMonth} ${currentYear}`}/>
      <DayNamesRow/>
      <CalendarBody>
        <Month calendarData={calendarData} currentDate={currentDate}/>
      </CalendarBody>
    </div>
  )
}

export default RightSide;