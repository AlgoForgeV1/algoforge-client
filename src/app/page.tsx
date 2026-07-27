import Background from "../components/background/Background";
import { Navbar } from "../features/landing/navbar";
import { Hero } from "../features/landing/hero";
import { FeaturesSection } from "../features/landing/features";
import { ShowcaseSection } from "../features/landing/showcase";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="pt-36">
        <Hero />

        <FeaturesSection />

        <ShowcaseSection />
      </main>
    </>
  );
}