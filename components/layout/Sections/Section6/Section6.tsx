"use client";

import styles from "./Section6.module.css";

const Section6 = () => {
  const onClick = () => {
    // https://apps.apple.com/kr/app/%EA%B0%80%EB%8A%94%EA%B9%80%EC%97%90/id6742342931
    window.open(
      "https://apps.apple.com/kr/app/%EA%B0%80%EB%8A%94%EA%B9%80%EC%97%90/id6742342931",
      "_blank"
    );
  };
  return (
    <section className={styles.container}>
      <p className={styles.paragraph}>
        시간 절약하고 작업물 퀄리티 올릴 준비 되셨나요?
      </p>
      <button className={styles.readyButton} onClick={onClick}>
        준비된 사람만 누르기
      </button>
    </section>
  );
};

export default Section6;
