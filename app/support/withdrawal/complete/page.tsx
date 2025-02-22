"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

const WithdrawalCompletePage = () => {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/");
  };
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen mx-auto overflow-hidden pt-[64px]">
      <section className="flex flex-col items-center w-fit gap-[6px] py-[64px] px-[48px] border border-[#F2F4F6] rounded-[20px] bg-white shadow-md">
        <div className="pb-[20px] flex flex-col gap-[8px]">
          <h1 className="text-2xl font-bold text-center">탈퇴 완료</h1>
          <p className="text-sm text-center text-[#666666]">
            탈퇴가 완료되었습니다.
          </p>
        </div>
        <Button
          style={{
            backgroundColor: "black",
            borderWidth: 1,
            borderColor: "#000000",
          }}
          onClick={onClickButton}
        >
          <Text style={{ color: "white" }}>홈으로 이동</Text>
        </Button>
      </section>
    </main>
  );
};

export default WithdrawalCompletePage;

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
