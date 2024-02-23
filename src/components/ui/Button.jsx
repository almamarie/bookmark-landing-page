import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    const clickHandler = () => {
      props.onClick && props.onClick();
    };
  return (
    <button
      onClick={clickHandler}
      type="text"
      className={`${styles.btn} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
