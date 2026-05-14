import { About } from "@/components/About";
import { Community } from "@/components/Community";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Merch } from "@/components/Merch";
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { UpcomingRuns } from "@/components/UpcomingRuns";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-zoomies-white text-zoomies-charcoal">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <UpcomingRuns />
        <Newsletter />
        <Merch />
        <Community />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
