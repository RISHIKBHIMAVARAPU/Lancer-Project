import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.menu}></div>
      <div className={styles.information}></div>
    </div>
  );
}

export default Home;
