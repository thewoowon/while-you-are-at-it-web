import Logo from "@/components/asset/Logo";
import styled from "./Header.module.css";

const Header = () => {
  return (
    <header className={styled.container}>
      <div className={styled.wrapper}>
        <Logo />
        <button className={styled.download}>앱 다운로드</button>
      </div>
    </header>
  );
};

export default Header;
