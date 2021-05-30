import React from 'react';
import PropTypes from "prop-types";
import style from "./LeftSide.module.scss";

function LeftSide({currentDay, currentDate}) {
  return (
    <>
      <div className={style.leftSide}>
        <h2 className={style.dayCaption}>{currentDay}</h2>
        <div className={style.wrapper}>
          <p>{currentDate}</p>
        </div>
      </div>
    </>
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
