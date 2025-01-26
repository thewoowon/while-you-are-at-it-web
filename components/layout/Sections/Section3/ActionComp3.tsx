"use client";

import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import Image from "next/image";

const ActionComp3 = ({
  inheritClass,
}: {
  inheritClass: {
    [key: string]: string;
  };
}) => {
  const scrollFadeIn = useScrollFadeIn(1, "50%");
  return (
    <div className="relative w-[316px]" {...scrollFadeIn}>
      <Image
        src="/images/section_3_particle_4.png"
        width={316}
        height={684}
        alt=""
        className={inheritClass.particle4}
      />
    </div>
  );
};

export default ActionComp3;
