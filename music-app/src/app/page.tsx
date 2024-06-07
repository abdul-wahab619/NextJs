import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center text-slate-500">Hi! Abdul Wahab</h1>
      <HeroSection />
      <FeaturedSection />
    </main>
  );
}
