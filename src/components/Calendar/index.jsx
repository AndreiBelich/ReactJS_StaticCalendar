import React, {useState} from 'react';
import LeftSide from "../LeftSide";
import CalendarBody from "../CalendarBody";
import DayName from "../DayName";
import CalendarDay from "../CalendarDay";
import { startOfMonth, endOfMonth, getDay, getDate, getYear, getMonth } from "date-fns";
import { NAME_OF_DAYS, NAME_OF_MONTHS, DAYS_PER_WEEK } from "../../common/js";
import style from "./Calendar.module.scss";

function Calendar(props) {
  const today = Date.now();
  const [currentDay, setCurrentDay] = useState(NAME_OF_DAYS[getDay(today)].toUpperCase());
  const [currentDate, setCurrentDate] = useState(getDate(today));
  const [currentYear, setCurrentYear] = useState(getYear(today));
  const [currentMonth, serCurrentMonth] = useState(NAME_OF_MONTHS[getMonth(today)].toUpperCase());
  
  const fillCalendarBody = () => {

    const createFirstRow = (currentValue, firstDay) => {
      const firstRow = new Array(DAYS_PER_WEEK).fill(0);
      for(let i = firstDay; i < DAYS_PER_WEEK; i++){
        firstRow[i] = ++currentValue;
      }
      return [currentValue,firstRow];
    }

    const createCalendarBody = (rows, currentValue) => {
      const tempBody = [];
      for(let i = 0; i < rows; i++){
        const temp = [];
        for(let j = 0; j < DAYS_PER_WEEK; j++){
          temp.push(++currentValue);
        }
        tempBody.push(temp);
      }
      return [currentValue, tempBody];
    }

    const createLastRow = (currentValue) => {
      const temp = [];
      for(let i = 0; i < DAYS_PER_WEEK; i++){
        const tempValue = ((currentValue + 1) <= lastDay) ? ++currentValue : 0;
        temp.push(tempValue);
      }
      return temp;
    }


    const today = Date.now();
    const firstDay = getDay(startOfMonth(today));
    const lastDay = getDate(endOfMonth(today));
    const calendarBody = [];
    let currentValue = 0;
    
    const[valueAfterCreateFirstRow, firstRow] = createFirstRow(currentValue, firstDay);
    currentValue = valueAfterCreateFirstRow;
    calendarBody.push(firstRow);

    const diff = lastDay - currentValue;
    const rows = Math.floor(diff / DAYS_PER_WEEK);
    const rest = diff % DAYS_PER_WEEK;

    const [valueAfterCreateBody, body] = createCalendarBody(rows, currentValue);
    currentValue = valueAfterCreateBody;
    calendarBody.push(...body);
    
    if(rest){
      calendarBody.push(createLastRow(currentValue));
    }
    return calendarBody;
  }

  const dayNames = NAME_OF_DAYS.map((day) => {
    return (
      <DayName caption={day[0].toUpperCase()} />
    )
  });
  const days = fillCalendarBody();
  const daysElements = days.map((week) => {
    return (
      <div className={style.calendarRow}>
        {
          week.map((day) => {
            /*return (
              <div className={`${style.calendarDay} ${day === currentDate ? style.currentDate : ""}`.trim()}>{day || ""}</div>
            );*/
            return (
              <CalendarDay caption={day || ""}
                           isCurrentDay={day === currentDate} />
            )
          })
        }
      </div>
    )
  });
  return (
    <article className={style.calendar}>
      <LeftSide currentDay={currentDay} currentDate={currentDate} />
      {/*<div className={style.rightSide}>
        <h2 className={style.dayCaption}>{currentMonth} {currentYear}</h2>
        <div className={style.calendarRow}>{elements}</div>
        <div>
          {daysElements}
        </div>
      </div>*/}
      <CalendarBody fullDate={`${currentMonth} ${currentYear}`}
                    nameOfDays={dayNames}
                    calendarBody={daysElements}/>
    </article>
  )
}

export default Calendar;
