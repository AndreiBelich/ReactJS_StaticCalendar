import React from 'react';
import PropTypes from "prop-types";
import { NAME_OF_DAYS, NAME_OF_MONTHS } from "../../../common/js/calendar_constants";
import { getYear } from "date-fns";
import CalendarDataBuilder from "../../../common/js/CalendarDataBuilder";
import style from "./CalendarBody.module.scss";

function CalendarBody({fullDate, nameOfDays, calendarBody}) {
  return (
    <>
      <div className={style.rightSide}>
        <h2 className={style.dayCaption}>{fullDate}</h2>
        <div className={style.calendarRow}>{nameOfDays}</div>
        <div>{calendarBody}</div>
      </div>
    </>
  )
}

CalendarBody.defaultProps = {
  fullDate: `${NAME_OF_MONTHS[0]} ${getYear(Date.now())}`,
  nameOfDays: NAME_OF_DAYS.map((day) => day[0].toUpperCase()),
  calendarBody: new CalendarDataBuilder(new Date(getYear(Date.now()), 0, 1)).buildData()
};

CalendarBody.propTypes = {
  fullDate: PropTypes.string.isRequired,
  nameOfDays: PropTypes.array.isRequired,
  calendarBody: PropTypes.array.isRequired
};

export default CalendarBody;
