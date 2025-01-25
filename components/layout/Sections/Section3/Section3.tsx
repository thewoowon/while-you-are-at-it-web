import GreenMarker from "@/components/asset/GreenMarker";
import styles from "./Section3.module.css";
import Image from "next/image";
import WhiteMarker from "@/components/asset/WhiteMarker";
import Pencil from "@/components/asset/Pencil";

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
            <Image
              src="/images/section_3_particle_1.png"
              width={300}
              height={300}
              alt=""
              className={styles.particle1}
            />
            <Image
              src="/images/section_3_particle_2.png"
              width={300}
              height={300}
              alt=""
              className={styles.particle2}
            />
          </div>
        </div>

        <div className={styles.particleBox}>
          <div className="relative w-fit">
            <div className="relative w-full h-[214px]">
              <div className={styles.greenMarker}>
                <GreenMarker />
              </div>
              <div className={styles.whiteMarker}>
                <WhiteMarker />
              </div>
            </div>
            <Image
              src="/images/section_3_particle_3.png"
              width={316}
              height={684}
              alt=""
              className={styles.particle3}
            />
            <div className="relative w-fit mt-[35px] flex gap-[11px] w-[316px]">
              <div className="pl-[2px] pr-[2px] pt-[7px]">
                <Pencil />
              </div>
              <p className={styles.descriptionText}>
                내가 직접 글을 올려 전달이 필요한
                <br />
                사람을 찾거나 내 작업물을
                <br />
                전달해 줄 사람을 찾을 수 있어요
              </p>
            </div>
          </div>
          <div className="relative w-[316px]">
            <Image
              src="/images/section_3_particle_4.png"
              width={316}
              height={684}
              alt=""
              className={styles.particle4}
            />
          </div>
          <div className="relative w-[316px]">
            <Image
              src="/images/section_3_particle_5.png"
              width={316}
              height={684}
              alt=""
              className={styles.particle5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
