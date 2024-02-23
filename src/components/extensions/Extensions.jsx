import React from "react";
import styles from "./Extensions.module.css";
import chromeIcon from "../../resources/images/logo-chrome.svg";
import firefoxIcon from "../../resources/images/logo-firefox.svg";
import operaIcon from "../../resources/images/logo-opera.svg";
import botsIcon from "../../resources/images/bg-dots.svg";
import Button from "../ui/Button";

const Extensions = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </header>

      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            className={styles.img}
            src={chromeIcon}
            alt="google chrome icon"
          />
          <div className={styles["heading-wrapper"]}>
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
          </div>
          <img className={styles.img} src={botsIcon} alt="bots icon" />

          <Button className={styles.btn}>Add & Install Extension</Button>
        </div>

        <div className={`${styles.card} ${styles.firefox}`}>
          <img
            className={styles.img}
            src={firefoxIcon}
            alt="moxilla firefox icon"
          />
          <div className={styles["heading-wrapper"]}>
            <h3>Add to Firefox</h3>
            <p>Minimum version 55</p>
          </div>
          <img className={styles.img} src={botsIcon} alt="bots icon" />

          <Button className={styles.btn}>Add & Install Extension</Button>
        </div>

        <div className={`${styles.card} ${styles.opera}`}>
          <img className={styles.img} src={operaIcon} alt="opera icon" />
          <div className={styles["heading-wrapper"]}>
            <h3>Add to Opera</h3>
            <p>Minimum version 46</p>
          </div>
          <img className={styles.img} src={botsIcon} alt="bots icon" />

          <Button className={styles.btn}>Add & Install Extension</Button>
        </div>
      </div>
    </section>
  );
};

export default Extensions;
