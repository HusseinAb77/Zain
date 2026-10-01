import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyUsSection } from "@/components/why-us-section";
import { PaymentSection } from "@/components/payment-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main lang="en" dir="ltr" className="min-h-screen bg-zinc-950">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <PaymentSection />
      <ContactSection dir="ltr" />
      <Footer />
    </main>
  );
}