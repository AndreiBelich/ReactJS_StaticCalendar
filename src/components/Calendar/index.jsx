import React, { useState } from 'react';
import CurrentDay from "./CurrentDay";
import CalendarBody from "./CalendarBody";
import { getDay, getDate, getYear, getMonth } from "date-fns";
import { NAME_OF_DAYS, NAME_OF_MONTHS } from "../../common/js/calendar_constants";
import CalendarDataBuilder from "../../common/js/CalendarDataBuilder";
import style from "./Calendar.module.scss";

function Calendar() {
  const today = Date.now();
  const [currentDay, setCurrentDay] = useState(NAME_OF_DAYS[getDay(today)].toUpperCase());
  const [currentDate, setCurrentDate] = useState(getDate(today));
  const [currentYear, setCurrentYear] = useState(getYear(today));
  const [currentMonth, serCurrentMonth] = useState(NAME_OF_MONTHS[getMonth(today)].toUpperCase());
  const [calendarData, setCalendarBody] = useState(new CalendarDataBuilder(today).buildData());
  
  return (
    <article className={style.calendar}>
      <CurrentDay currentDay={currentDay} 
                  currentDate={currentDate} />
      <CalendarBody currentMonth={currentMonth} 
                    currentYear={currentYear} 
                    calendarData={calendarData} 
                    currentDate={currentDate}/>
    </article>
  )
}

export default Calendar;