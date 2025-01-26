import styles from "./Section4.module.css";
import CircleBig from "@/components/asset/CircleBig";
import ActionComp1 from "./ActionComp1";
import ActionComp2 from "./ActionComp2";

const Section4 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.flexBox}>
          <div className={styles.labelStyle}>
            <p className={styles.labelText}>업체주문</p>
            <p className={styles.titleText}>
              금속가공, 아크릴가공, 인쇄, 3d프린팅 등 <br />
              소규모 가공업체와의 거래는 <br />
              모두 가는김에에서 주문하세요
            </p>
          </div>
          <ActionComp2 />
        </div>
        <div className="absolute top-0 left-[40%]">
          <CircleBig />
        </div>

        <ActionComp1 inheritClass={styles} />
      </div>
    </section>
  );
};

export default Section4;
