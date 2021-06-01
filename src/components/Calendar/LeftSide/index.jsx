import React from 'react';
import PropTypes from "prop-types";
import CalendarHeading from "../CalendarHeading";
import style from "./LeftSide.module.scss";

const LeftSide = ({currentDay, currentDate}) => {
  return (
    <div className={style.leftSide}>
      <CalendarHeading caption={currentDay} />
      <div className={style.wrapper}>
        <p>{currentDate}</p>
      </div>
    </div>
  )
}

LeftSide.defaultProps = {
  currentDay: 1,
  currentDate: "January"
};

LeftSide.propTypes = {
  currentDay: PropTypes.string.isRequired,
  currentDate: PropTypes.number.isRequired
};

export default LeftSide;
