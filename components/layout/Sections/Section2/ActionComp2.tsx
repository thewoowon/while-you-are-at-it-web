"use client";

import useScrollFadeIn from "@/hooks/useScrollFadeIn";

const ActionComp2 = ({ inheritClass }: { inheritClass: string }) => {
  const scrollFadeIn1 = useScrollFadeIn(1, "50%");
  return (
    <div className="relative" {...scrollFadeIn1}>
      <p className={inheritClass}>
        매번 그 시간을 더 투자할 수 있다면 내 작업물은 어떻게 바뀔까요?
      </p>
    </div>
  );
};

export default ActionComp2;
