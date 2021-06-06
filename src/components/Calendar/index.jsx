import React, { useState, useEffect } from 'react';
import CurrentDay from "./CurrentDay";
import CalendarBody from "./CalendarBody";
import Arrow from "./Arrow";
import { getDay, getDate, getYear, getMonth, addMonths, isToday } from "date-fns";
import { NAME_OF_DAYS, NAME_OF_MONTHS } from "../../common/js/calendar_constants";
import CalendarDataBuilder from "../../common/js/CalendarDataBuilder";
import style from "./Calendar.module.sass";

function Calendar() {
  const [today, setToday] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(NAME_OF_DAYS[getDay(today)].toUpperCase());
  const [currentDate, setCurrentDate] = useState(getDate(today));
  const [currentYear, setCurrentYear] = useState(getYear(today));
  const [currentMonth, serCurrentMonth] = useState(NAME_OF_MONTHS[getMonth(today)].toUpperCase());
  const [dataBuilder, setDataBuilder] = useState(new CalendarDataBuilder(today));
  const [calendarData, setCalendarBody] = useState(dataBuilder.buildData());
  const [hasCurrentDay, setHasCurrentDay] = useState(isToday(today));

  const nextMonth = () => setToday((prevState) => addMonths(prevState, 1));

  const prevMonth = () => setToday((prevState) => addMonths(prevState, -1));

  useEffect(()=> {
    setCurrentYear(getYear(today));
    serCurrentMonth(NAME_OF_MONTHS[getMonth(today)].toUpperCase());
    dataBuilder.setNewDate(today);
    setCalendarBody(dataBuilder.buildData());
    setHasCurrentDay(isToday(today));
  }, [today, dataBuilder]);
  
  return (
    <article className={style.calendar}>
      <Arrow handler={prevMonth} direction={"left"}/>
      <Arrow handler={nextMonth} direction={"right"} />
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