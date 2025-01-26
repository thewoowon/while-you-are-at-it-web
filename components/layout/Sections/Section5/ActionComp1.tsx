"use client";

import Marker from "@/components/asset/Marker";
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
    <div className="pt-[72px]">
      <Image
        src="/images/section_5_particle_2.png"
        width={415}
        height={798}
        alt=""
        className={inheritClass.particle2}
      />
      <div className="relative w-fit mt-[25px] flex gap-[11px] w-[415px]">
        <div className="pl-[2px] pr-[2px] pt-[7px]">
          <Marker />
        </div>
        <p className={inheritClass.descriptionText}>
          전달을 맡은 사람은 지도에서 경로를 추천 <br />
          받고 작업물을 전달한 뒤 QR코드로 전달 <br />
          정보를 전송해요
        </p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center w-full">
      <div className={inheritClass.particle2}>
        <Image src="/images/section_5_particle_2.png" fill alt="" />
      </div>
      <div className="relative flex flex-col items-center pt-[22px]">
        <div className="relative flex flex-col w-fit">
          <div className="pl-[2px] pr-[2px] pt-[7px]">
            <Marker />
          </div>
          <p className={inheritClass.descriptionText}>
            전달을 맡은 사람은 지도에서 경로를 추천 <br />
            받고 작업물을 전달한 뒤 QR코드로 전달 <br />
            정보를 전송해요
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActionComp1;
