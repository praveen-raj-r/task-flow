import HeroSection from "@/components/landing-page/hero-section";
import FeaturesSection from "@/components/landing-page/features-section";
import CompaniesCarousel from "@/components/landing-page/companies-carousel";
import FAQsSection from "@/components/landing-page/faqs-section";
import CtaSection from "@/components/landing-page/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CompaniesCarousel />
      <FAQsSection />
      <CtaSection />
    </div>
  );
}
