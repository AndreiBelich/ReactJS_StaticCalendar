import React from 'react';
import PropTypes from "prop-types";
import style from "./Day.module.sass";

function Day({caption, isCurrentDay}) {
  return (
    <div className={`${style.calendarDay} ${isCurrentDay ? style.currentDate : ""}`}>{caption}</div>
  )
}

Day.defaultProps = {
  caption: 1,
  isCurrentDay: false
};

Day.propTypes = {
  caption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  isCurrentDay: PropTypes.bool.isRequired
};

export default Day;
