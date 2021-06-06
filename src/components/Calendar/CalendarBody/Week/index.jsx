import React from "react";
import Day from "../Day";
import PropTypes from "prop-types";
import { DAYS_PER_WEEK } from "../../../../common/js/calendar_constants";
import style from "./Week.module.sass";

const Week = ({weekData, currentDate}) => {
  return (
    <div className={style.calendarRow}>
      {
        weekData.map((day, index) =>{
          return (
            <Day key={`day-${index}`}
                         caption={day  ? day : ""}
                         isCurrentDay={currentDate === day}/>
          );
        })
      }
    </div>
  );
}

Week.defaultProps = {
  weekData: new Array(DAYS_PER_WEEK).fill(0),
  currentDate: -1
};

Week.propTypes = {
  weekData: PropTypes.array.isRequired,
  currentDate: PropTypes.number.isRequired
};

export default Week;