import React, { useState } from "react";
import styles from "./Features.module.css";
import SimpleBookmarkingImg from "../../resources/images/illustration-features-tab-1.svg";
import SpeedySearchingImg from "../../resources/images/illustration-features-tab-2.svg";
import EasySharingImg from "../../resources/images/illustration-features-tab-3.svg";

const Features = () => {
  const [currentTab, setCurrentTab] = useState("simple bookmarking");
  const data = {
    "simple bookmarking": {
      title: "Bookmark in one click",
      img: SimpleBookmarkingImg,
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },

    "speedy searching": {
      title: "Intelligent search",
      img: SpeedySearchingImg,
      text: "  Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },

    "easy sharing": {
      title: "Share your bookmarks",
      img: EasySharingImg,
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  };
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

        <div className={styles.hero}>
          <div className={styles["illustrator"]}>
            <img
              className={styles.img}
              src={data[currentTab].img}
              alt="Illustration design"
            />

            <div className={styles["box"]}></div>
          </div>
          <div className={styles.text}>
            <h2>{data[currentTab].title}</h2>
            <p>{data[currentTab].text}</p>
            <div className={styles.buttons}>
              <button type="text" className={styles["btn--google"]}>
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
