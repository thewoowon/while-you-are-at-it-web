"use client";
import Bounce from "@/components/element/bounce";
import useAuth from "@/hooks/useAuth";
import { useTokenStore } from "@/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const GooglePage = () => {
  const { setToken } = useTokenStore();
  const { googleAuth } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      const login = async () => {
        const response = await googleAuth(code);

        if (response) {
          if (!response.user || !response.access_token) {
            router.push("/support/withdrawal/not-found");
            return;
          }
          setToken(response.access_token);
          router.push("/support/withdrawal/action");
        }
      };

      login();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, googleAuth]);

  return (
    <main className="items-center justify-items-center min-h-screen w-full">
      <div className="flex flex-col items-center justify-center w-full h-screen mx-auto overflow-hidden gap-[12px]">
        <Bounce />
        로그인 중입니다.
      </div>
    </main>
  );
};

export default GooglePage;
