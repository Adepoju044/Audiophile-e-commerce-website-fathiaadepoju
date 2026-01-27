import { useState, useEffect } from "react";
import styles from "./WelcomeStyles.module.css";

function WelcomeCustom() {
  const [text, setText] = useState(
    "EXPERIENCE PREMIUM SOUND LIKE NEVER BEFORE",
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setText("PREMIUM SOUND EXPERIENCE 😉😎");
      } else {
        setText("EXPERIENCE PREMIUM SOUND LIKE NEVER BEFORE🤗😉");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles["custom-skeleton"]}>
      <p className={styles["typing-animation-text"]}>{text}</p>
    </div>
  );
}

export default WelcomeCustom;
