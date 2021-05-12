import React from "react";
import PropTypes from "prop-types";

import * as styles from "./label.module.css";

const Label = ({ label, htmlFor, children, value }) => {
  let labelClassName = "";

  if (value !== undefined && value !== null && value !== "")
    labelClassName = styles.nonEmpty;

  return (
    <div className={styles.labelContainer}>
      <label htmlFor={htmlFor} className={labelClassName}>
        {label}
      </label>
      {children}
    </div>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  value: PropTypes.any,
};

export default Label;
