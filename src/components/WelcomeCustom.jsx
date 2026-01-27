import styles from "./WelcomeStyles.module.css";

function CustomSkeleton() {
  return (
    <div className={styles["custom-skeleton"]}>
      <p className={styles["typing-animation-text"]}>
        EXPERIENCE PREMIUM SOUND LIKE NEVER BEFORE
      </p>
    </div>
  );
}

export default CustomSkeleton;
