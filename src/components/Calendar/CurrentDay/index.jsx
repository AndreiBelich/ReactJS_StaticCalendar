import React from 'react';
import PropTypes from "prop-types";
import SideHeading from "../SideHeading";
import style from "./CurrentDay.module.scss";

const CurrentDay = ({currentDay, currentDate}) => {
  return (
    <div className={style.leftSide}>
      <SideHeading caption={currentDay} />
      <div className={style.wrapper}>
        <p>{currentDate}</p>
      </div>
    </div>
  )
}

CurrentDay.defaultProps = {
  currentDay: 1,
  currentDate: "January"
};

CurrentDay.propTypes = {
  currentDay: PropTypes.string.isRequired,
  currentDate: PropTypes.number.isRequired
};

export default CurrentDay;
