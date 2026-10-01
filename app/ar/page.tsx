import { NavbarAr } from "@/components/navbar-ar";
import { HeroSectionAr } from "@/components/hero-section-ar";
import { ServicesSectionAr } from "@/components/services-section-ar";
import { WhyUsSectionAr } from "@/components/why-us-section-ar";
import { PaymentSectionAr } from "@/components/payment-section-ar";
import { ContactSectionAr } from "@/components/contact-section-ar";
import { FooterAr } from "@/components/footer-ar";

export default function Page() {
  return (
    <main lang="ar" dir="rtl" className="min-h-screen bg-zinc-950">
      <NavbarAr />
      <HeroSectionAr />
      <ServicesSectionAr />
      <WhyUsSectionAr />
      <PaymentSectionAr />
      <ContactSectionAr />
      <FooterAr />
    </main>
  );
}