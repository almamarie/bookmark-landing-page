import React, { useRef, useState } from "react";
import styles from "./Contacts.module.css";
import Button from "../ui/Button";

const Contacts = () => {
  const [error, setError] = useState(false);
  const inputRef = useRef();

  const validateInput = () => {
    const email = inputRef.current.value;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      setError(true);
    } else {
      inputRef.current.value = "";
      setError(false);
    }
  };
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <span className={styles.num}>35,000+ already joined</span>
        <h2>Stay up-to-date with what we&apos;re doing</h2>
        <div className={styles["input-btn-wrapper"]}>
          <div
            className={`${styles["input-wrapper"]} ${
              error ? styles["input-error"] : ""
            }`}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter your email address"
            />
            {error && (
              <span className={styles["error-msg"]}>
                Whoops, make sure it's an email
              </span>
            )}
          </div>
          <Button onClick={validateInput}>Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
