"use client";

import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import { useState } from "react";

const ActionComp2 = ({ inheritClass }: { inheritClass: string }) => {
  const scrollFadeIn1 = useScrollFadeIn(1, "50%");
  const [width, setWidth] = useState<number>(0);

  // 현재 스크린 너비 확인

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }
  return (
    <div className="relative" {...scrollFadeIn1}>
      <p className={inheritClass}>
        매번 그 시간을 더 투자할 수 있다면 {width < 1200 ? <br /> : null}내
        작업물은 어떻게 바뀔까요?
      </p>
    </div>
  );
};

export default ActionComp2;
