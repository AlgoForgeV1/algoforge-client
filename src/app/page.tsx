import Background from "../components/background/Background";
import { Navbar } from "../features/landing/navbar";
import { Hero } from "../features/landing/hero";
import { FeaturesSection } from "../features/landing/features";
import { ShowcaseSection } from "../features/landing/showcase";
import { ExtensionSection } from "../features/landing/extension";
import { PricingSection } from "../features/landing/pricing";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="pt-36">
        <Hero />

        <FeaturesSection />

        <ShowcaseSection />

        <ExtensionSection />

        <PricingSection />
      </main>
    </>
  );
}