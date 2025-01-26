import styles from "./Section3.module.css";
import Image from "next/image";
import ActionComp2 from "./ActionComp2";

const Section3 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.flexBoxBetween}>
          <div className={styles.labelStyle}>
            <p className={styles.labelText}>글쓰기 · 내 주변</p>
            <p className={styles.titleText}>
              내 주변의 동료를 찾아 <br />
              전달을 요청해보세요
            </p>
          </div>
          <div className={styles.flexBox}>
            <div className={styles.particle1}>
              <Image src="/images/section_3_particle_1.png" alt="" fill />
            </div>
            <div className={styles.particle2}>
              <Image src="/images/section_3_particle_2.png" alt="" fill />
            </div>
          </div>
        </div>
        <ActionComp2 inheritClass={styles} />
      </div>
    </section>
  );
};

export default Section3;
