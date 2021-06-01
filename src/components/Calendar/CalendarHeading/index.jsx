import React from "react";
import PropTypes from "prop-types";
import style from "./CalendarHeading.module.scss";

const CalendarHeading = ({caption}) => {
  return (
    <h2 className={style.dayCaption}>{caption}</h2>
  );
}

CalendarHeading.defaultProps = {
  caption: "Calendar Heading"
};

CalendarHeading.propTypes = {
  caption: PropTypes.string.isRequired
};

export default CalendarHeading;