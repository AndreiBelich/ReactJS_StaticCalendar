import React, { useState } from 'react';
import LeftSide from "./LeftSide";
import CalendarBody from "./CalendarBody";
import DayNamesRow from "./DayNamesRow";
import Week from "./Week";
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
  const [calendarBody, setCalendarBody] = useState(new CalendarDataBuilder(today).buildData());
  

  const calendarData = calendarBody.map((week, index) => {
    return (
      <Week key={`week-${index}`} weekData={week} />
    )
  });
  return (
    <article className={style.calendar}>
      <LeftSide currentDay={currentDay} currentDate={currentDate} />
      <CalendarBody fullDate={`${currentMonth} ${currentYear}`}
                    calendarBody={calendarData}>
                    <DayNamesRow/>
      </CalendarBody>
    </article>
  )
}

export default Calendar;

  /*
    Тело календаря представлено в виде двумерного массива, в котором числа отличные от 0
    указывают на позицию дня в месяце, позиции отмеченные 0 не отображаются для пользователя
    и просто дополняют структуру для симметрии.
    Пример структуры для мая 2021 года, так как реализуется англоязычный календарь
    первым днем недели является воскресение.
    [
      [0,0,0,0,0,0,1],
      [2,3,4,5,6,7,8],
      [9,10,11,12,13,14,15],
      [16,17,18,19,20,21,22],
      [23,24,25,26,27,28,29],
      [30,31,0,0,0,0,0]
    ]
   */

    /*return (
      <div key={`week-${index}`} className={style.calendarRow}>
        {
          week.map((day, index) => {
            return (
              <CalendarDay key={`day-${index}`}
                           caption={`${day}` === "0" ? "" : `${day}`}
                           isCurrentDay={day === currentDate} />
            )
          })
        }
      </div>
    )*/
