import React from 'react';
import PropTypes from "prop-types";
import style from "./DayName.module.sass";

function DayName({caption}) {
  return (
    <div className={`${style.dayStyle} ${style.calendarDay}`}>
      {caption}
    </div>
  )
}

DayName.defaultProps = {
  caption: "S"
};

DayName.defaultProps = {
  caption: PropTypes.string.isRequired
};

export default DayName;
