import PlayStore from "@/components/asset/PlayStore";
import styles from "./Section1.module.css";
import AppStore from "@/components/asset/AppStore";
import PhoneChunk from "@/components/asset/PhoneChunk";
import {
  Particle1,
  Particle2,
  Particle3,
  Particle4,
} from "@/components/asset/Particles";
import Link from "next/link";

const Section1 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.particle1}>
        <Particle1 />
      </div>
      <div className={styles.particle2}>
        <Particle2 />
      </div>
      <div className={styles.particle3}>
        <Particle3 />
      </div>
      <div className={styles.particle4}>
        <Particle4 />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.title}>
          소규모 가공업체와의 거래를 <br /> 더 빠르게 더 현명하게, 가는김에{" "}
        </p>
        <div className="flex gap-[20px]">
          <Link
            href="https://apps.apple.com/kr/app/%EC%9B%90%ED%95%98%EB%8A%94%EA%B9%80%EC%97%90/id158"
            target="_blank"
            className={styles.appStore}
          >
            <AppStore />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.wonhaneungimae.wonhaneungimae"
            target="_blank"
            className={styles.playStore}
          >
            <PlayStore />
          </Link>
        </div>
        <div className={styles.chunk}>
          <PhoneChunk />
        </div>
      </div>
    </section>
  );
};

export default Section1;
