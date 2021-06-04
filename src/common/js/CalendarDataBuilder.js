import { DAYS_PER_WEEK } from "./calendar_constants";
import { startOfMonth, endOfMonth, getDay, getDate } from "date-fns";

class CalendarDataBuilder{
  constructor(date = Date.now()) {
    this.setNewDate(date);
    this._calendarData = [];
    this._currentValue = 0;
  }

  setNewDate(newDate){
    this._date = newDate;
    this._numberOfTheFirstDayOfTheMonth = getDay(startOfMonth(this._date));
    this._lastDayOfMonth = getDate(endOfMonth(this._date));
  }

 _createFirstWeek() {
    const firstWeek = new Array(DAYS_PER_WEEK).fill(0);
    for(let i = this._numberOfTheFirstDayOfTheMonth; i < DAYS_PER_WEEK; i++){
      firstWeek[i] = ++this._currentValue;
    }
    return firstWeek;
  }

  _createWeeks(weeksAmount) {
    const weeks = [];
    for(let i = 0; i < weeksAmount; i++){
      const temp = [];
      for(let j = 0; j < DAYS_PER_WEEK; j++){
        temp.push(++this._currentValue);
      }
      weeks.push(temp);
    }
    return weeks;
  }

  _createLastWeek() {
    const lastWeek = new Array(DAYS_PER_WEEK).fill(0);
    for(let i = 0; i < DAYS_PER_WEEK; i++){
      if(this._currentValue + 1 > this._lastDayOfMonth){
        break;
      }
      lastWeek[i] = ++this._currentValue;
    }
    return lastWeek;
  }

  buildData(){
    this._calendarData = [];
    this._currentValue = 0;

    this._calendarData.push(this._createFirstWeek());

    const diff = this._lastDayOfMonth - this._currentValue;
    const weeksAmount = Math.floor(diff / DAYS_PER_WEEK);
    const rest = diff % DAYS_PER_WEEK;
  
    this._calendarData.push(...this._createWeeks(weeksAmount));
    
    if(rest){
      this._calendarData.push(this._createLastWeek());
    }
    return this._calendarData;
  }
}

export default CalendarDataBuilder;