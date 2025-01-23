import styles from "./Section1.module.css";

const Section1 = () => {
  return (
    <section className={styles.container}>
      <p className={styles.title}>
        소규모 가공업체와의 거래를 <br /> 더 빠르게 더 현명하게, 가는김에{" "}
      </p>
      <button className={styles.download}>앱 다운로드</button>
    </section>
  );
};

export default Section1;
