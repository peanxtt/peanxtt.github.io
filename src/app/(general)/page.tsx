import HeroSection from "@/components/Sections/HeroSection";
import { redirect } from "next/navigation";

export default function Home() {
  // redirect('/notice')

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
