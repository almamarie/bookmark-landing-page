import React, { useState } from "react";
import styles from "./FrequentlyAskedQuestions.module.css";
import downArrowIcon from "../../resources/images/icon-arrow.svg";
import { QUESTIONS } from "../../resources/questions";
import Button from "../ui/Button";
const FrequentlyAskedQuestions = () => {
  const [activeKeys, setActivekeys] = useState([]);

  const showOrHideQuestion = (eventIndex) => {
    return () => {
      const keyIndex = activeKeys.findIndex((key) => {
        return key === eventIndex;
      });
      if (keyIndex === -1) {
        setActivekeys((prev) => [...prev, eventIndex]);
      } else {
        setActivekeys((prev) =>
          prev.filter((key) => {
            return key !== eventIndex;
          })
        );
      }
    };
  };

  const isActive = (index) => {
    return activeKeys.findIndex((ind) => ind === index) !== -1;
  };
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </header>

      <ul className={styles.questions}>
        <hr />

        {QUESTIONS.map((question, index) => {
          return (
            <li
              key={index}
              className={styles.question}
              onClick={showOrHideQuestion(index)}
            >
              <header className={styles["questions-header"]}>
                <span>{question.question}</span>
                <img
                  className={`${isActive(index) ? styles["flip-img"] : ""}`}
                  src={downArrowIcon}
                  alt="down arrow"
                />
              </header>
              <p
                className={`${styles.answer} ${
                  isActive(index) ? "" : styles.hide
                }`}
              >
                {question.answer}
              </p>
              <hr />
            </li>
          );
        })}
      </ul>
      <div className={styles.btn}>
        <Button>More Info</Button>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
