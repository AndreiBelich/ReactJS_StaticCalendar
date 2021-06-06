import React from "react";
import Month from "./Month";
import DayNamesRow from "./DayNamesRow";
import SideHeading from "../SideHeading";
import PropTypes from "prop-types";
import {NAME_OF_MONTHS} from "../../../common/js/calendar_constants";
import CalendarDataBuilder from "../../../common/js/CalendarDataBuilder";
import {getYear, getMonth} from "date-fns";
import style from "./CalendarBody.module.sass";

const CalendarBody = ({currentMonth, currentYear, calendarData, currentDate}) => {
  return (
    <div className={style.calendarBody}>
      <SideHeading caption={`${currentMonth} ${currentYear}`}/>
      <DayNamesRow/>
      <Month calendarData={calendarData} currentDate={currentDate}/>
    </div>
  )
}

CalendarBody.defaultProps = {
  currentMonth: NAME_OF_MONTHS[getMonth(Date.now())],
  currentYear: getYear(Date.now()),
  calendarData: new CalendarDataBuilder(new Date(getYear(Date.now),
                                                 getMonth(Date.now),
                                                 1)).buildData(),
  currentDate: 1
};

CalendarBody.propTypes = {
  currentMonth: PropTypes.string.isRequired,
  currentYear: PropTypes.number.isRequired,
  calendarData: PropTypes.array.isRequired,
  currentDate: PropTypes.number.isRequired
};

export default CalendarBody;