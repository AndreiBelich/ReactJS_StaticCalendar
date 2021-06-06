import React from 'react';
import PropTypes from "prop-types";
import SideHeading from "../SideHeading";
import style from "./CurrentDay.module.sass";
import { getDay, getDate } from "date-fns";
import { NAME_OF_DAYS } from "../../../common/js/calendar_constants";

const CurrentDay = ({currentDay, currentDate}) => {
  return (
    <div className={style.currentDay}>
      <SideHeading caption={currentDay} />
      <div className={style.outerWrapper}>
        <div className={style.innerWrapper}>{currentDate}</div>
      </div>
    </div>
  )
}

CurrentDay.defaultProps = {
  currentDay: NAME_OF_DAYS[getDay(new Date())].toUpperCase(),
  currentDate: getDate(new Date())
};

CurrentDay.propTypes = {
  currentDay: PropTypes.string.isRequired,
  currentDate: PropTypes.number.isRequired
};

export default CurrentDay;
