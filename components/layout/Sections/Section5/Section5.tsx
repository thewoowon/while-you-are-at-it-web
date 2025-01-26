import Marker from "@/components/asset/Marker";
import styles from "./Section5.module.css";
import Image from "next/image";
import ActionComp1 from "./ActionComp1";

const Section5 = () => {
  return (
    <section className={styles.container}>
      <div className="absolute h-full w-full pt-[308px]">
        <div className={styles.circle} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.flexColumn}>
          <div className={styles.labelStyle}>
            <p className={styles.labelText}>진행정보 · 전달지도</p>
            <p className={styles.titleText}>
              내 작업물의 전달 진행정보를 <br />
              확인해보세요
            </p>
          </div>
          <div className={styles.particle1}>
            <Image src="/images/section_5_particle_1.png" alt="" fill />
          </div>
        </div>
        <ActionComp1 inheritClass={styles} />
      </div>
    </section>
  );
};

export default Section5;
