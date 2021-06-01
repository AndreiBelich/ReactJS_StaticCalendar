import React from "react";
import Day from "../Day";
import PropTypes from "prop-types";
import style from "./Week.module.scss";

const Week = ({weekData, currentDate}) => {
  return (
    <div className={style.calendarRow}>
      {
        weekData.map((day, index) =>{
          return (
            <Day key={`day-${index}`}
                         caption={`${day}` === "0" ? "" : `${day}`}
                         isCurrentDay={currentDate === day}/>
          );
        })
      }
    </div>
  );
}

Week.defaultProps = {
  weekData: [1, 2, 3, 4, 5, 6, 7],
  currentDate: 1
};

Week.propTypes = {
  weekData: PropTypes.array.isRequired,
  currentDate: PropTypes.number.isRequired
};

export default Week;