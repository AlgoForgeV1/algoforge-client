import Background from "../components/background/Background";
import { Navbar } from "../features/landing/navbar";
import { Hero } from "../features/landing/hero";
import { ShowcaseSection } from "../features/landing/showcase";
import { Forgey } from "../components/mascot";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="pt-36">
        {/* Hero goes here */}
        <Hero />
        <div className="py-32 flex justify-center">
          <Forgey />
        </div>
        <ShowcaseSection />
      </main>
    </>
  );
}