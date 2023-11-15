import styles from "./OverviewSection.module.scss";

const OverviewSection = () => {
  return (
    <div className={styles["overview-section-container"]}>
      <div className={styles.column}>
        <div className={styles["main-heading"]}>54k+</div>
        <div className={styles["sub-heading"]}>Students</div>
      </div>
      <div className={styles.column}>
        <div className={styles["main-heading"]}>132 +</div>
        <div className={styles["sub-heading"]}>Trained Tutors</div>
      </div>
      <div className={styles.column}>
        <div className={styles["main-heading"]}>3200 +</div>
        <div className={styles["sub-heading"]}>Completed Assignments</div>
      </div>
      <div className={styles.column}>
        <div className={styles["main-heading"]}>32 +</div>
        <div className={styles["sub-heading"]}>Subjects</div>
      </div>
    </div>
  );
};

export default OverviewSection;
