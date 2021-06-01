import React from 'react';
import PropTypes from "prop-types";
import { NAME_OF_MONTHS } from "../../../../common/js/calendar_constants";
import { getYear } from "date-fns";

function CalendarBody({children}) {
  return (
    <>
      { children }
    </>
  )
}


CalendarBody.propTypes = {
  children: PropTypes.element.isRequired
};

export default CalendarBody;
