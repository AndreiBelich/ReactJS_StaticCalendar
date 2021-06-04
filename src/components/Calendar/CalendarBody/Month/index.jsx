import React from "react";
import PropTypes from "prop-types";
import { getYear, getMonth } from "date-fns";
import CalendarDataBuilder from "../../../../common/js/CalendarDataBuilder";
import Week from "../Week";

const Month = ({calendarData, currentDate}) => {
  return (
    <div>
      {
        calendarData.map((week, index) => <Week key={`week-${index}`}
                                                currentDate={currentDate}
                                                weekData={week} />)
      }
    </div>
  )
}

Month.defaultProps = {
  calendarData: new CalendarDataBuilder(new Date(getYear(Date.now),
                                                 getMonth(Date.now),
                                                 1)).buildData(),
  currentDate: 1
};

Month.propTypes = {
  calendarData: PropTypes.array.isRequired,
  currentDate: PropTypes.number.isRequired
};

export default Month;