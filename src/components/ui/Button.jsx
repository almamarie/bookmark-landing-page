import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type="text" className={`${styles.btn} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
