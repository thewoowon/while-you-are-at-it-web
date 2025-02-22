"use client";

import customAxios from "@/lib/axios";
import { useTokenStore } from "@/store";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const WithdrawalActionPage = () => {
  const router = useRouter();
  const { token } = useTokenStore();

  const deleteMe = async (): Promise<boolean> => {
    try {
      const response = await customAxios.delete(`/users/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status !== 200) {
        // 토큰 만료
        toast.error("로그인이 만료되었습니다. 다시 로그인해주세요.");
        return false;
      }
      toast.success("회원 탈퇴가 완료되었습니다.");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const onAgree = async () => {
    const response = await deleteMe();
    if (response) {
      router.push("/support/withdrawal/complete");
    } else {
      router.push("/support/withdrawal");
    }
  };

  const onCancel = () => {
    router.push("/");
  };
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen mx-auto overflow-hidden pt-[64px]">
      <section className="flex flex-col items-center w-fit gap-[6px] py-[64px] px-[48px] border border-[#F2F4F6] rounded-[20px] bg-white shadow-md">
        <div className="pb-[20px] flex flex-col gap-[8px]">
          <h1 className="text-2xl font-bold text-center">회원 탈퇴</h1>
          <p className="text-sm text-center text-[#666666]">
            정말 탈퇴하시겠습니까?
          </p>
        </div>
        <Button
          style={{
            backgroundColor: "black",
            borderWidth: 1,
            borderColor: "#000000",
          }}
          onClick={onAgree}
        >
          <Text style={{ color: "white" }}>네, 탈퇴할게요</Text>
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#000000",
          }}
          onClick={onCancel}
        >
          <Text>아니요, 다시 생각해볼게요</Text>
        </Button>
      </section>
    </main>
  );
};

export default WithdrawalActionPage;

const Button = styled.button<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor};
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 48px;
  position: relative;
`;

const Text = styled.p`
  fontSize: 16px,
  fontFamily: 'Prentendard-Medium',
  lineHeight: 24px,
`;
