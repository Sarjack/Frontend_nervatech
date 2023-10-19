import React from 'react'
import Hero from '../components/Hero'
import { manufacturer } from '../data'
import OurSolutions from '../components/OurSolutions'
import CTASection from '../components/CTASection'
const ManufacturersScreen = () => {
  console.log(manufacturer.ctaSection.ctaText)
  return (
    <div className="manufacturer">
      <Hero
        data={manufacturer.hero}
        style={
          {
            // backgroundColor: 'white',
          }
        }
      />
      <OurSolutions solutions={manufacturer.ourSolutions} />

      <CTASection
        imgSrc={manufacturer.ctaSection.imgSrc}
        CTAText={manufacturer.ctaSection.CTAText}
        CTAButtonText={manufacturer.ctaSection.CTAButtonText}
      />
    </div>
  )
}

export default ManufacturersScreen
