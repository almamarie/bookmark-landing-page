import React, { useState } from "react";
import styles from "./Features.module.css";

const Features = () => {
  const [currentTab, setCurrentTab] = useState("simple bookmarking");
  return (
    <section id="features" className={styles.section}>
      <header className={styles.header}>
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </header>

      <div>
        <nav className={styles["feature-nav"]}>
          <button
            type="text"
            onClick={() => setCurrentTab("simple bookmarking")}
            className={`${styles["feature-nav--btn"]} ${
              currentTab === "simple bookmarking" ? styles["active-tab"] : ""
            }`}
          >
            Simple Bookmarking
          </button>
          <button
            type="text"
            onClick={() => setCurrentTab("speedy searching")}
            className={`${styles["feature-nav--btn"]} ${
              currentTab === "speedy searching" ? styles["active-tab"] : ""
            }`}
          >
            Speedy Searching
          </button>
          <button
            type="text"
            onClick={() => setCurrentTab("easy sharing")}
            className={`${styles["feature-nav--btn"]} ${
              currentTab === "easy sharing" ? styles["active-tab"] : ""
            }`}
          >
            Easy Sharing
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Features;
