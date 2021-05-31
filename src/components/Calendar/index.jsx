import React, {useState} from 'react';
import LeftSide from "../LeftSide";
import CalendarBody from "../CalendarBody";
import DayName from "../DayName";
import CalendarDay from "../CalendarDay";
import { startOfMonth, endOfMonth, getDay, getDate, getYear, getMonth } from "date-fns";
import { NAME_OF_DAYS, NAME_OF_MONTHS, DAYS_PER_WEEK } from "../../common/js";
import style from "./Calendar.module.scss";

function Calendar() {
  const today = Date.now();
  const [currentDay, setCurrentDay] = useState(NAME_OF_DAYS[getDay(today)].toUpperCase());
  const [currentDate, setCurrentDate] = useState(getDate(today));
  const [currentYear, setCurrentYear] = useState(getYear(today));
  const [currentMonth, serCurrentMonth] = useState(NAME_OF_MONTHS[getMonth(today)].toUpperCase());
  const [calendarBody, setCalendarBody] = useState(fillCalendarBody(today));
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
  
  const dayNames = NAME_OF_DAYS.map((day, index) => {
    return (
      <DayName key={`day-${index}`} caption={day[0].toUpperCase()} />
    )
  });

  const calendarData = calendarBody.map((week, index) => {
    return (
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
    )
  });
  return (
    <article className={style.calendar}>
      <LeftSide currentDay={currentDay} currentDate={currentDate} />
      <CalendarBody fullDate={`${currentMonth} ${currentYear}`}
                    nameOfDays={dayNames}
                    calendarBody={calendarData}/>
    </article>
  )
}

/*
  createFirstRow, createCalendarBody, createLastRow - 3 функции для заполнения двумерного
  массива. 
 */

/*Используется для создания первой строки массива. Заполняет первую строку нулями до
  позиции 1 числа текущего месяца
 */
const createFirstRow = (currentValue, firstDay) => {
  const firstRow = new Array(DAYS_PER_WEEK).fill(0);
  for(let i = firstDay; i < DAYS_PER_WEEK; i++){
    firstRow[i] = ++currentValue;
  }
  return [currentValue,firstRow];
}

/*Используется для создания основной части тела календаря, количество строк 
  генерируется переменной rows
*/
const createCalendarBody = (rows, currentValue, lastDay) => {
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

/*Если необходимо то создается последняя строка массива. Дополняет нулями строку начиная с позиции
  следующей за lastDay
 */
const createLastRow = (currentValue, lastDay) => {
  const temp = [];
  for(let i = 0; i < DAYS_PER_WEEK; i++){
    const tempValue = ((currentValue + 1) <= lastDay) ? ++currentValue : 0;
    temp.push(tempValue);
  }
  return temp;
}

const fillCalendarBody = (date) => {
  const firstDay = getDay(startOfMonth(date));//номер дня которому соответствует 1 число месяца
  const lastDay = getDate(endOfMonth(date));//число соответствующее количеству дней для текущего месяца
  const calendarBody = [];
  let currentValue = 0;
  
  const[valueAfterCreateFirstRow, firstRow] = createFirstRow(currentValue, firstDay);
  currentValue = valueAfterCreateFirstRow;
  calendarBody.push(firstRow);

  const diff = lastDay - currentValue;//Количество дней которые нужно создать после того как была создана первая строка
  const rows = Math.floor(diff / DAYS_PER_WEEK);//Количество строк(недель) которые будут добавлены в массив
  /*количество дней которые не поместились в основное тело массива нужно для проверки,
   следует создавать последнюю строку или нет*/
  const rest = diff % DAYS_PER_WEEK;

  const [valueAfterCreateBody, body] = createCalendarBody(rows, currentValue, lastDay);
  currentValue = valueAfterCreateBody;
  calendarBody.push(...body);
  
  if(rest){
    calendarBody.push(createLastRow(currentValue, lastDay));
  }
  return calendarBody;
}

export default Calendar;
