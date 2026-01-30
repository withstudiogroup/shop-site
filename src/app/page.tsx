import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProductGallery from '@/components/sections/ProductGallery'
import BenefitsSection from '@/components/sections/BenefitsSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import TradeInSection from '@/components/sections/TradeInSection'
import AccessoriesSection from '@/components/sections/AccessoriesSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductGallery />
        <BenefitsSection />
        <FeaturesSection />
        <TradeInSection />
        <AccessoriesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
