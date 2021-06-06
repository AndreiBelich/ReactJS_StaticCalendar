import { DAYS_PER_WEEK } from "./calendar_constants";
import { startOfMonth, endOfMonth, getDay, getDate } from "date-fns";

class CalendarDataBuilder{
  constructor(date = Date.now()) {
    this.setNewDate(date);
    this._calendarData = [];
    this._currentDay = 0;
  }

  setNewDate(newDate){
    this._date = newDate;
    this._numberOfTheFirstDayOfTheMonth = getDay(startOfMonth(this._date));
    this._lastDayOfMonth = getDate(endOfMonth(this._date));
  }

 _createFirstWeek() {
    const firstWeek = new Array(DAYS_PER_WEEK).fill(0);
    for(let i = this._numberOfTheFirstDayOfTheMonth; i < DAYS_PER_WEEK; i++){
      firstWeek[i] = ++this._currentDay;
    }
    return firstWeek;
  }

  _createWeeks(weeksAmount) {
    const weeks = [];
    for(let i = 0; i < weeksAmount; i++){
      const temp = [];
      for(let j = 0; j < DAYS_PER_WEEK; j++){
        temp.push(++this._currentDay);
      }
      weeks.push(temp);
    }
    return weeks;
  }

  _createLastWeek(restDays) {
    const lastWeek = new Array(DAYS_PER_WEEK).fill(0);
    for(let i = 0; i < restDays; i++){
      lastWeek[i] = ++this._currentDay;
    }
    return lastWeek;
  }

  buildData(){
    this._calendarData = [];
    this._currentDay = 0;

    this._calendarData.push(this._createFirstWeek());

    const diff = this._lastDayOfMonth - this._currentDay;
    const weeksAmount = Math.floor(diff / DAYS_PER_WEEK);
    const restDays = diff % DAYS_PER_WEEK;
  
    this._calendarData.push(...this._createWeeks(weeksAmount));
    
    if(restDays){
      this._calendarData.push(this._createLastWeek(restDays));
    }
    return this._calendarData;
  }
}

export default CalendarDataBuilder;