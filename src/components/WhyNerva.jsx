import React from 'react'
import SectionHeading from './SectionHeading'
import DescriptionText from './DescriptionText'
import MiniCard from './MiniCard'
import StarsCanvas from './StarCanvas'
import { WhyNervaData } from '../data'

const WhyNerva = () => {
  return (
    <div className="why-nerva">
      <div className="why-nerva-title">
        <SectionHeading text={WhyNervaData.heading} />
      </div>
      <div className="why-nerva-description">
        <DescriptionText
          text={WhyNervaData.description}
          style={{ textAlign: 'center' }}
        />
      </div>

      <div className="why-nerva-box">
        <div className="why-nerva-blue-background"></div>
        <MiniCard data={WhyNervaData.miniCardDetails[0]} />
        <MiniCard data={WhyNervaData.miniCardDetails[1]} />
        <MiniCard data={WhyNervaData.miniCardDetails[2]} />
      </div>
      <StarsCanvas />
    </div>
  )
}

export default WhyNerva
