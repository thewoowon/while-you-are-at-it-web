"use client";

import Camera from "@/components/asset/Camera";
import Image from "next/image";
import { useState } from "react";

const ActionComp1 = ({
  inheritClass,
}: {
  inheritClass: {
    [key: string]: string;
  };
}) => {
  const [width, setWidth] = useState<number>(0);

  // 현재 스크린 너비 확인

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }
  return width > 768 ? (
    <div className={inheritClass.particleBox}>
      <div className="relative w-[341px]">
        <Image
          src="/images/section_4_particle_1.png"
          width={341}
          height={712}
          alt=""
          className={inheritClass.particle1}
        />
      </div>
      <div className="relative w-fit pt-[73px]">
        <div className="relative w-fit flex gap-[11px] w-[316px]">
          <div className="pl-[2px] pr-[2px] pt-[7px]">
            <Camera />
          </div>
          <p className={inheritClass.descriptionText}>
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
          className={inheritClass.particle2}
        />
      </div>
      <div className="relative w-[341px] pt-[211px]">
        <Image
          src="/images/section_4_particle_3.png"
          width={341}
          height={712}
          alt=""
          className={inheritClass.particle3}
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col pt-[74px]">
      <div className="flex flex-row gap-[16px] justify-between">
        <div className="relative">
          <Image
            src="/images/section_4_particle_1.png"
            width={341}
            height={712}
            alt=""
            className={inheritClass.commonParticle}
          />
        </div>
        <div className="relative">
          <Image
            src="/images/section_4_particle_2.png"
            width={341}
            height={712}
            alt=""
            className={inheritClass.commonParticle}
          />
        </div>
        <div className="relative">
          <Image
            src="/images/section_4_particle_3.png"
            width={341}
            height={712}
            alt=""
            className={inheritClass.commonParticle}
          />
        </div>
      </div>
      <div className="relative flex flex-col items-center pt-[22px]">
        <div className="relative flex flex-col w-fit">
          <div className="pl-[2px] pr-[2px] pt-[7px]">
            <Camera />
          </div>
          <p className={inheritClass.descriptionText}>
            영상을 촬영하고 작업지점을 표시하여 <br />
            직접 방문하지 않아도 <br />
            상세한 주문요청이 가능해요
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActionComp1;
