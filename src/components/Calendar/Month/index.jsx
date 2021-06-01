import React from "react";
import Week from "../Week";

const Month = ({calendarData, currentDate}) => {
  return (
    <div>
      {
        calendarData.map((week, index) => {
          return (
            <Week key={`week-${index}`} currentDate={currentDate} weekData={week} />
          );
        })
      }
    </div>
  )
}

export default Month;