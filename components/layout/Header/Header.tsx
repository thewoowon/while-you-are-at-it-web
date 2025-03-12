import Logo from "@/components/asset/Logo";
import styled from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  const onClick = () => {
    // https://apps.apple.com/kr/app/%EA%B0%80%EB%8A%94%EA%B9%80%EC%97%90/id6742342931
    window.open(
      "https://apps.apple.com/kr/app/%EA%B0%80%EB%8A%94%EA%B9%80%EC%97%90/id6742342931",
      "_blank"
    );
  };

  return (
    <header className={styled.container}>
      <div className={styled.wrapper}>
        <div
          className={styled.logoBox}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <Logo />
        </div>
        <div className={styled.flexBoxWide}>
          <div className={styled.flexBox}>
            <Link href={"/"} className={styled.link}>
              홈
            </Link>
            <Link href={"/support"} className={styled.link}>
              고객센터
            </Link>
            {/* <Link href={"/docs"} className={styled.link}>
              이용약관
            </Link> */}
          </div>
          <button className={styled.download} onClick={onClick}>
            앱 다운로드
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
