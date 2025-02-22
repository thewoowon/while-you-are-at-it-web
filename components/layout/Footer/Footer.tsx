import LogoB from "@/components/asset/LogoB";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <LogoB />
        <div className={styles.flexBox}>
          <p className={styles.paragraph}>팀 소개</p>
          <div className={styles.flexBoxColumn}>
            <p className={styles.paragraph}>서울특별시 노원구</p>
            <p className={styles.paragraph}>대표자 김준서</p>
            <p className={styles.paragraph}> lululala@gmail.com</p>
          </div>
        </div>
        <div className={styles.linkBox}>
          <Link href={"/docs"} className={styles.link}>
            이용약관
          </Link>
          <span className={styles.divider}>|</span>
          <Link href={"/privacy"} className={styles.link}>
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
