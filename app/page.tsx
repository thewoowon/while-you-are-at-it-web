import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from "@/components/layout/Sections";
import Section6 from "@/components/layout/Sections/Section6";

export default function Home() {
  return (
    <main className="items-center justify-items-center min-h-screen w-full">
      <div
        className="flex flex-col w-full relative"
        style={{
          overflow: "hidden",
          scrollBehavior: "smooth",
          // 스크롤바 숨김
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </main>
  );
}
