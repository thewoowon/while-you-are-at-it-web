"use client";

import PhoneChunk from "@/components/asset/PhoneChunk";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";

const ActionComp1 = () => {
  const scrollFadeIn1 = useScrollFadeIn(0.7, "50%");
  return (
    <div className="relative" {...scrollFadeIn1}>
      <PhoneChunk />
    </div>
  );
};

export default ActionComp1;
