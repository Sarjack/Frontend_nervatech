import React from 'react'
import Hero from '../components/Hero'
import ManufacturerDistributor from '../components/ManufacturerDistributor'
import OurSolutions from '../components/OurSolutions'
import CTASection from '../components/CTASection'
import StarsCanvas from '../components/StarCanvas'
import { home } from '../data'
const HomeScreen = () => {
  return (
    <div>
      <Hero data={home.hero} />

      <ManufacturerDistributor />
      <OurSolutions solutions={home.ourSolutions} />
      <CTASection
        imgSrc={home.ctaSection.imgSrc}
        CTAText={home.ctaSection.CTAText}
        CTAButtonText={home.ctaSection.CTAButtonText}
      />
    </div>
  )
}

export default HomeScreen
