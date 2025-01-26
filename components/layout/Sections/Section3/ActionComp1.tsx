"use client";

import useDoubleScrollFadeIn from "@/hooks/useDoubleScrollFadeIn";
import Image from "next/image";

const ActionComp1 = ({
  inheritClass,
}: {
  inheritClass: {
    [key: string]: string;
  };
}) => {
  const scrollFadeIns = useDoubleScrollFadeIn(1, "50%");
  return (
    <div className={inheritClass.flexBoxBetween}>
      <div className={inheritClass.labelStyle} {...scrollFadeIns[0]}>
        <p className={inheritClass.labelText}>글쓰기 · 내 주변</p>
        <p className={inheritClass.titleText}>
          내 주변의 동료를 찾아 <br />
          전달을 요청해보세요
        </p>
      </div>
      <div className={inheritClass.flexBox} {...scrollFadeIns[1]}>
        <Image
          src="/images/section_3_particle_1.png"
          width={300}
          height={300}
          alt=""
          className={inheritClass.particle1}
        />
        <Image
          src="/images/section_3_particle_2.png"
          width={300}
          height={300}
          alt=""
          className={inheritClass.particle2}
        />
      </div>
    </div>
  );
};

export default ActionComp1;
