import React from 'react'
import SectionHeading from './SectionHeading'
import {
  OurSolutionDataBlue,
  OurSolutionDataWhite,
} from './OurSolutionDataCard'
import StarsCanvas from './StarCanvas'

const OurSolutions = (props) => {
  const { solutions } = props

  return (
    <div className="our-solutions" id="our-solutions">
      <SectionHeading text={solutions.heading} />
      <div className="our-solutions-data">
        {solutions.benefits.map((data, index) => {
          if (index % 2) {
            return (
              <OurSolutionDataWhite
                key={index}
                title={data.title}
                description={data.description}
                imgSrc={data.imgSrc}
              />
            )
          } else {
            return (
              <OurSolutionDataBlue
                key={index}
                title={data.title}
                description={data.description}
                imgSrc={data.imgSrc}
              />
            )
          }
        })}
      </div>
      <StarsCanvas />
    </div>
  )
}

export default OurSolutions
