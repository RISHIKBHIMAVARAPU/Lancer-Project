import React from "react";
import styles from "./SlideShow.module.css";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
import card4 from "./card4.png";
import card5 from "./card5.png";
import card6 from "./card6.png";
import banner1 from "./banner2.png";

export default function SlideShow() {
  return (
    <div className={styles.slideBox}>
      {/* * slideshow or cards */}
      {/* <div className={styles.card}>
        <img src={card1} alt="" className={styles.cardImage} />
      </div>
      <div className={styles.card}>
        <img src={card2} alt="" className={styles.cardImage} />
      </div>
      <div className={styles.card}>
        <img src={card3} alt="" className={styles.cardImage} />
      </div>
      <div className={styles.card}>
        <img src={card4} alt="" className={styles.cardImage} />
      </div>
      <div className={styles.card}>
        <img src={card5} alt="" className={styles.cardImage} />
      </div>
      <div className={styles.card}>
        <img src={card6} alt="" className={styles.cardImage} />
      </div> */}
      <img src={banner1} alt="" className={styles.cardImage} />
      <div className={styles.catDisplay}>
        <p>Web development</p>
        <p>Marketing</p>
        <p>Technical Writing</p>
        <p>Art</p>
        <p>Android development</p>
        <p>Content Creation</p>
        <p>Social Marketing</p>
        <p>Literature</p>
        {/* <p>Art</p>
        <p>Art</p>
        <p>Writing</p>
        <p>Writing</p> */}
      </div>
    </div>
  );
}
