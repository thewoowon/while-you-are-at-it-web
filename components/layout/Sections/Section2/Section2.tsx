import ActionComp1 from "./ActionComp1";
import ActionComp2 from "./ActionComp2";
import styles from "./Section2.module.css";

const Section2 = () => {
  return (
    <section className={styles.container}>
      <ActionComp1 inheritClass={styles.paragraph} />
      <ActionComp2 inheritClass={styles.paragraph} />
    </section>
  );
};

export default Section2;
