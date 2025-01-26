import ActionComp1 from "./ActionComp1";
import ActionComp2 from "./ActionComp2";
import styles from "./Section2.module.css";

const Section2 = () => {
  return (
    <section className={styles.container}>
      <ActionComp1 inheritClass={styles.paragraph1} />
      <ActionComp2 inheritClass={styles.paragraph2} />
    </section>
  );
};

export default Section2;
