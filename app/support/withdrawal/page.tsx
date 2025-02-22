"use client";

import AppleIcon from "@/components/asset/Icon/AppleIcon";
import GoogleIcon from "@/components/asset/Icon/GoogleIcon";
import KakaoIcon from "@/components/asset/Icon/KakaoIcon";
import NaverIcon from "@/components/asset/Icon/NaverIcon";
import styled from "@emotion/styled";

const WithdrawalPage = () => {
  const onClickGoogleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&response_type=code&scope=${process.env.NEXT_PUBLIC_GOOGLE_SCOPE}&access_type=offline`;
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen mx-auto overflow-hidden pt-[64px]">
      <section className="flex flex-col items-center w-fit gap-[6px] py-[64px] px-[48px] border border-[#F2F4F6] rounded-[20px] bg-white shadow-md">
        <div className="pb-[20px] flex flex-col gap-[8px]">
          <h1 className="text-2xl font-bold text-center">회원 탈퇴</h1>
          <p className="text-sm text-center text-[#666666]">
            가입했던 이메일로 인증을 진행해주세요. <br />
            인증에 성공하면 회원탈퇴가 시작됩니다.
          </p>
        </div>
        <Button
          style={{
            backgroundColor: "black",
            borderWidth: 1,
            borderColor: "#000000",
          }}
        >
          <View>
            <AppleIcon />
          </View>
          <Text style={{ color: "white" }}>애플로 계속하기</Text>
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#F2F4F6",
          }}
          onClick={onClickGoogleLogin}
        >
          <View>
            <GoogleIcon />
          </View>
          <Text>구글로 계속하기</Text>
        </Button>
        <Button style={{ backgroundColor: "#03C75A" }}>
          <View>
            <NaverIcon />
          </View>
          <Text style={{ color: "white" }}>네이버로 계속하기</Text>
        </Button>
        <Button style={{ backgroundColor: "#FEE500" }}>
          <View>
            <KakaoIcon />
          </View>
          <Text>카카오로 계속하기</Text>
        </Button>
      </section>
    </main>
  );
};

export default WithdrawalPage;

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

const View = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
`;

const Text = styled.p`
  fontSize: 16px,
  fontFamily: 'Prentendard-Medium',
  lineHeight: 24px,
`;
