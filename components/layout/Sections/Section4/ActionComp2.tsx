"use client";

import OrderIcons from "@/components/asset/OrderIcons";
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
    <div className="flex items-end h-full">
      <OrderIcons />
    </div>
  ) : (
    <div className="flex items-end h-full">
      <OrderIcons width={"100%"} height={"auto"} />
    </div>
  );
};

export default ActionComp2;
