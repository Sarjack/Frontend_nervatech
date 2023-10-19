import React from 'react'
import Hero from '../components/Hero'
import { buyer } from '../data'
import CTASection from '../components/CTASection'
import OurSolutions from '../components/OurSolutions'
const DistributorsScreen = () => {
  return (
    <div className="buyer-screen">
      <Hero data={buyer.hero} />
      <OurSolutions solutions={buyer.ourSolutions} />
      <CTASection
        imgSrc={buyer.ctaSection.imgSrc}
        CTAText={buyer.ctaSection.CTAText}
        CTAButtonText={buyer.ctaSection.CTAButtonText}
      />
    </div>
  )
}

export default DistributorsScreen
