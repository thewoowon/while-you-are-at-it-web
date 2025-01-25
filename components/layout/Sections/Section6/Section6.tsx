import styles from "./Section6.module.css";

const Section6 = () => {
  return (
    <section className={styles.container}>
      <p className={styles.paragraph}>
        시간 절약하고 작업물 퀄리티 올릴 준비 되셨나요?
      </p>
      <button className={styles.readyButton}>준비된 사람만 누르기</button>
    </section>
  );
};

export default Section6;
