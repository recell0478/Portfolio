import React from "react";
import profile from "./assets/home.png";
import styles from "./page.module.css";
function Home() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.nameContainer}>
          <h1 className={styles.name}>Rachel</h1>
          <h1 className={styles.name2}>Pastreich</h1>
        </div>

        <div className={styles.profileContainer}>
          <img
            src={profile.src}
            className={styles.profile}
            alt="Rachel Pastreich"
          />
        </div>
      </div>

      <div className={styles.description}>
        <p>Student at Boston University</p>
        <p>Bachelor's in Computer Science</p>
        <p>Kilachand Honors College</p>
      </div>
    </div>
  );
}

export default Home;
