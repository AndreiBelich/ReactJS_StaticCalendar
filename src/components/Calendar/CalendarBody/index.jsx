import React from 'react';
import PropTypes from "prop-types";
import { NAME_OF_MONTHS } from "../../../common/js/calendar_constants";
import { getYear } from "date-fns";
import CalendarDataBuilder from "../../../common/js/CalendarDataBuilder";
import style from "./CalendarBody.module.scss";

function CalendarBody({fullDate, children}) {
  return (
    <>
      <div className={style.rightSide}>
        <h2 className={style.dayCaption}>{fullDate}</h2>
        { children }
      </div>
    </>
  )
}

CalendarBody.defaultProps = {
  fullDate: `${NAME_OF_MONTHS[0]} ${getYear(Date.now())}`,
  //calendarBody: new CalendarDataBuilder(new Date(getYear(Date.now()), 0, 1)).buildData()
};

CalendarBody.propTypes = {
  fullDate: PropTypes.string.isRequired,
  //calendarBody: PropTypes.array.isRequired
};

export default CalendarBody;
