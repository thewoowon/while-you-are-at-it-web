"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const KakaoPage = () => {
  const router = useRouter();

  useEffect(() => {}, [router]);

  return <div>Logging in...</div>;
};

export default KakaoPage;
