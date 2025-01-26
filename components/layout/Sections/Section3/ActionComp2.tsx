"use client";

import GreenMarker from "@/components/asset/GreenMarker";
import Pencil from "@/components/asset/Pencil";
import WhiteMarker from "@/components/asset/WhiteMarker";
// import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import Image from "next/image";
import { useState } from "react";

const ActionComp2 = ({
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
      <div className="relative w-fit">
        <div className="relative w-full h-[214px]">
          <div className={inheritClass.greenMarker}>
            <GreenMarker />
          </div>
          <div className={inheritClass.whiteMarker}>
            <WhiteMarker />
          </div>
        </div>
        <Image
          src="/images/section_3_particle_3.png"
          width={316}
          height={684}
          alt=""
          className={inheritClass.particle3}
        />
        <div className="relative w-fit mt-[35px] flex gap-[11px] w-[316px]">
          <div className="pl-[2px] pr-[2px] pt-[7px]">
            <Pencil />
          </div>
          <p className={inheritClass.descriptionText}>
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
          className={inheritClass.particle4}
        />
      </div>
      <div className="relative w-[316px]">
        <Image
          src="/images/section_3_particle_5.png"
          width={316}
          height={684}
          alt=""
          className={inheritClass.particle5}
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col">
      <div className="relative w-[110px] h-[103px]">
        <div className={inheritClass.greenMarkerSmall}>
          <GreenMarker width={55} height={"auto"} />
        </div>
        <div className={inheritClass.whiteMarkerSmall}>
          <WhiteMarker width={85} height={"auto"} />
        </div>
      </div>
      <div className="flex flex-row gap-[16px] justify-between">
        <div className="relative">
          <Image
            src="/images/section_3_particle_3.png"
            width={316}
            height={684}
            alt=""
            className={inheritClass.commonParticle}
          />
        </div>
        <div className="relative">
          <Image
            src="/images/section_3_particle_4.png"
            width={316}
            height={684}
            alt=""
            className={inheritClass.commonParticle}
          />
        </div>
        <div className="relative">
          <Image
            src="/images/section_3_particle_5.png"
            width={316}
            height={684}
            alt=""
            className={inheritClass.commonParticle}
          />
        </div>
      </div>
      <div className="relative flex flex-col items-center pt-[22px]">
        <div className="relative flex flex-col w-fit">
          <div className="pl-[2px] pr-[2px] pt-[7px]">
            <Pencil />
          </div>
          <p className={inheritClass.descriptionText}>
            내가 직접 글을 올려 전달이 필요한
            <br />
            사람을 찾거나 내 작업물을
            <br />
            전달해 줄 사람을 찾을 수 있어요
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActionComp2;
