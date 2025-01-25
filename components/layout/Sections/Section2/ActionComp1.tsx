"use client";

import useScrollFadeIn from "@/hooks/useScrollFadeIn";

const ActionComp1 = ({ inheritClass }: { inheritClass: string }) => {
  const scrollFadeIn1 = useScrollFadeIn(1, "50%");
  return (
    <div className="relative" {...scrollFadeIn1}>
      <p className={inheritClass}>
        개인이 소규모 가공업체와 거래 시 <br />
        이동시간포함 평균 3시간 이상 소요,
      </p>
    </div>
  );
};

export default ActionComp1;
