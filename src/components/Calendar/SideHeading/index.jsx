import React from "react";
import PropTypes from "prop-types";
import style from "./SideHeading.module.sass";

const SideHeading = ({caption}) => {
  return (
    <h2 className={style.dayCaption}>{caption}</h2>
  );
}

SideHeading.defaultProps = {
  caption: "Calendar Heading"
};

SideHeading.propTypes = {
  caption: PropTypes.string.isRequired
};

export default SideHeading;