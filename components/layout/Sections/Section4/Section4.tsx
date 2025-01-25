import OrderIcons from "@/components/asset/OrderIcons";
import styles from "./Section4.module.css";
import CircleBig from "@/components/asset/CircleBig";
import Image from "next/image";
import Camera from "@/components/asset/Camera";

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
          <div className="flex items-end h-full">
            <OrderIcons />
          </div>
        </div>
        <div className="absolute top-0 left-[40%]">
          <CircleBig />
        </div>
        <div className={styles.particleBox}>
          <div className="relative w-[341px]">
            <Image
              src="/images/section_4_particle_1.png"
              width={341}
              height={712}
              alt=""
              className={styles.particle1}
            />
          </div>
          <div className="relative w-fit pt-[73px]">
            <div className="relative w-fit flex gap-[11px] w-[316px]">
              <div className="pl-[2px] pr-[2px] pt-[7px]">
                <Camera />
              </div>
              <p className={styles.descriptionText}>
                영상을 촬영하고 작업지점을 표시하여 <br />
                직접 방문하지 않아도 <br />
                상세한 주문요청이 가능해요
              </p>
            </div>
            <Image
              src="/images/section_4_particle_2.png"
              width={341}
              height={712}
              alt=""
              className={styles.particle2}
            />
          </div>
          <div className="relative w-[341px] pt-[211px]">
            <Image
              src="/images/section_4_particle_3.png"
              width={341}
              height={712}
              alt=""
              className={styles.particle3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
