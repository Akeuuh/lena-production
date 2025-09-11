import HeroSection from "@/components/landing/HeroSection"
import BenefitsSection from "@/components/landing/BenefitsSection"
import AboutSection from "@/components/landing/AboutSection"
import CTABanner from "@/components/landing/CTABanner"

interface HomeProps {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: HomeProps) {
  await params // We await params but don't need to use locale in this component yet
  
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <CTABanner />
    </>
  )
}
