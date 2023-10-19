import React from 'react'

import AboutUsHero from '../components/AboutUsHero'
import WhyNerva from '../components/WhyNerva'
import EnquiryForm from '../components/EnquiryForm'
import StarsCanvas from '../components/StarCanvas'
import { aboutData } from '../data'
const data = {}

const AboutUsScreen = () => {
  return (
    <div className="about-us-screen">
      <AboutUsHero data={aboutData.hero} />

      <WhyNerva />

      <EnquiryForm />
    </div>
  )
}

export default AboutUsScreen
