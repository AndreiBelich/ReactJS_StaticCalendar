import React from 'react';
import PropTypes from "prop-types";

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
