import { DAYS_PER_WEEK } from "./calendar_constants";
import { startOfMonth, endOfMonth, getDay, getDate } from "date-fns";

class CalendarDataBuilder{
  constructor(date = Date.now()) {
    this._date = date;
    this._firstDay = getDay(startOfMonth(date));//номер дня которому соответствует 1 число месяца
    this._lastDay = getDate(endOfMonth(date));//число соответствующее количеству дней для текущего месяца
    this._calendarBody = [];
    this._currentValue = 0;
  }

 _createFirstRow() {
    const firstRow = new Array(DAYS_PER_WEEK).fill(0);
    for(let i = this._firstDay; i < DAYS_PER_WEEK; i++){
      firstRow[i] = ++this._currentValue;
    }
    return firstRow;
  }

  _createCalendarBody(rows) {
    const body = [];
    for(let i = 0; i < rows; i++){
      const temp = [];
      for(let j = 0; j < DAYS_PER_WEEK; j++){
        temp.push(++this._currentValue);
      }
      body.push(temp);
    }
    return body;
  }

  _createLastRow() {
    const lastRow = [];
    for(let i = 0; i < DAYS_PER_WEEK; i++){
      const tempValue = ((this._currentValue + 1) <= this._lastDay) ? ++this._currentValue : 0;
      lastRow.push(tempValue);
    }
    return lastRow;
  }

  buildData(){
    this._calendarBody = [];
    this._currentValue = 0;
    this._calendarBody.push(this._createFirstRow());
    const diff = this._lastDay - this._currentValue;
    const rows = Math.floor(diff / DAYS_PER_WEEK);
    const rest = diff % DAYS_PER_WEEK;
  
    this._calendarBody.push(...this._createCalendarBody(rows));
    
    if(rest){
      this._calendarBody.push(this._createLastRow());
    }
    return this._calendarBody;
  }
}

export default CalendarDataBuilder;