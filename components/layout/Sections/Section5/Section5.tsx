import Marker from "@/components/asset/Marker";
import styles from "./Section5.module.css";
import Image from "next/image";

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

          <Image
            src="/images/section_5_particle_1.png"
            width={473}
            height={479}
            alt=""
            className={styles.particle1}
          />
        </div>
        <div className="pt-[72px]">
          <Image
            src="/images/section_5_particle_2.png"
            width={415}
            height={798}
            alt=""
            className={styles.particle2}
          />
          <div className="relative w-fit mt-[25px] flex gap-[11px] w-[415px]">
            <div className="pl-[2px] pr-[2px] pt-[7px]">
              <Marker />
            </div>
            <p className={styles.descriptionText}>
              전달을 맡은 사람은 지도에서 경로를 추천 <br />
              받고 작업물을 전달한 뒤 QR코드로 전달 <br />
              정보를 전송해요
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
