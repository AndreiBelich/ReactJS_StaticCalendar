import React, { useState, useEffect } from 'react';
import CurrentDay from "./CurrentDay";
import CalendarBody from "./CalendarBody";
import Arrow from "./Arrow";
import { getDay, getDate, getYear, getMonth, addMonths, isToday } from "date-fns";
import { NAME_OF_DAYS, NAME_OF_MONTHS } from "../../common/js/calendar_constants";
import CalendarDataBuilder from "../../common/js/CalendarDataBuilder";
import style from "./Calendar.module.scss";

function Calendar() {
  const [today, setToday] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(NAME_OF_DAYS[getDay(today)].toUpperCase());//!!!!
  const [currentDate, setCurrentDate] = useState(getDate(today));//!!!
  const [currentYear, setCurrentYear] = useState(getYear(today));
  const [currentMonth, serCurrentMonth] = useState(NAME_OF_MONTHS[getMonth(today)].toUpperCase());
  const [calendarData, setCalendarBody] = useState(new CalendarDataBuilder(today).buildData());
  const [hasCurrentDay, setHasCurrentDay] = useState(isToday(today));

  const nextMonth = () => setToday((prevState) => addMonths(today, 1));

  const prevMonth = () => setToday((prevState) => addMonths(prevState, -1));

  useEffect(()=> {
    setCurrentYear(getYear(today));
    serCurrentMonth(NAME_OF_MONTHS[getMonth(today)].toUpperCase());
    setCalendarBody(new CalendarDataBuilder(today).buildData());
    setHasCurrentDay(isToday(today));
  }, [today]);
  
  return (
    <article className={style.calendar}>
      <Arrow handler={nextMonth} direction={"left"} />
      <Arrow handler={prevMonth} direction={"right"}/>
      <CurrentDay currentDay={currentDay} 
                  currentDate={currentDate} />
      <CalendarBody currentMonth={currentMonth} 
                    currentYear={currentYear} 
                    calendarData={calendarData} 
                    currentDate={hasCurrentDay ? currentDate : -1}/>
    </article>
  )
}

export default Calendar;