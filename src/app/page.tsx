import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import Problem from "../components/Problem";
import Architecture from "../components/Architecture";
import DeepDives from "../components/DeepDives";
import FooterCTA from "../components/FooterCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f4f1ea] dark:bg-[#0a0a0a]">
      <Hero />
      <SocialProof />
      <Problem />
      <Architecture />
      <DeepDives />
      <FooterCTA />
    </main>
  );
}