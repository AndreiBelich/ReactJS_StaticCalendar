import React from "react";
import Month from "./Month";
import CalendarBody from "./CalendarBody";
import DayNamesRow from "./DayNamesRow";
import SideHeading from "../SideHeading";
import PropTypes from "prop-types";
import {NAME_OF_MONTHS} from "../../../common/js/calendar_constants";
import CalendarDataBuilder from "../../../common/js/CalendarDataBuilder";
import {getYear, getMonth} from "date-fns";
import style from "./RightSide.module.scss";

const RightSide = ({currentMonth, currentYear, calendarData, currentDate}) => {
  return (
    <div className={style.rightSide}>
      <SideHeading caption={`${currentMonth} ${currentYear}`}/>
      <DayNamesRow/>
      <Month calendarData={calendarData} currentDate={currentDate}/>
    </div>
  )
}

RightSide.defaultProps = {
  currentMonth: NAME_OF_MONTHS[0],
  currentYear: getYear(Date.now()),
  calendarData: new CalendarDataBuilder(new Date(getYear(Date.now),
                                                 getMonth(Date.now),
                                                 1)).buildData(),
  currentDate: 1
};

RightSide.propTypes = {
  currentMonth: PropTypes.string.isRequired,
  currentYear: PropTypes.number.isRequired,
  calendarData: PropTypes.array.isRequired,
  currentDate: PropTypes.number.isRequired
};

export default RightSide;