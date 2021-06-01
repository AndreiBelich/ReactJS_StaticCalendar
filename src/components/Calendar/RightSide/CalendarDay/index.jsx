import React from 'react';
import PropTypes from "prop-types";
import style from "./CalendarDay.module.scss";

function CalendarDay({caption, isCurrentDay}) {
  return (
    <div className={`${style.calendarDay} ${isCurrentDay ? style.currentDate : ""}`.trim()}>{caption}</div>
  )
}

CalendarDay.defaultProps = {
  caption: 1,
  isCurrentDay: false
};

CalendarDay.propTypes = {
  caption: PropTypes.number.isRequired,
  isCurrentDay: PropTypes.bool.isRequired
};

export default CalendarDay;
