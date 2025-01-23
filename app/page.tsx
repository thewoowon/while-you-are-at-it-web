import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from "@/components/layout/Sections";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen w-full">
      <main className="flex flex-col w-full">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
      <footer className="flex flex-wrap items-center justify-center"></footer>
    </div>
  );
}
