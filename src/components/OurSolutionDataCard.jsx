import React from 'react'
import LeftBarText from './LeftBarText'
import '../'
import BulletPoints from './BulletPoints'
const OurSolutionDataBlue = (props) => {
  return (
    <div className="our-solution-data-blue">
      <div className="our-solution-data-blue-left-container">
        <div className="our-solution-data-blue-left">
          <LeftBarText
            text={props.title}
            // style={{ fontSize: '2rem', paddingLeft: '2rem' }}
          />
          {/* <div className="our-solution-data-blue-left-description">
            {props.description}
          </div> */}
          <BulletPoints description={props.description} />
        </div>
      </div>
      <div className="our-solution-data-blue-right">
        <img src={props.imgSrc} alt={props.title} />
      </div>
    </div>
  )
}

const OurSolutionDataWhite = (props) => {
  return (
    <div className="our-solution-data-white">
      <div className="our-solution-data-white-left">
        <img src={props.imgSrc} alt={props.title} />
      </div>
      <div className="our-solution-data-white-right-container">
        <div className="our-solution-data-white-right">
          <LeftBarText
            text={props.title}
            // style={{ fontSize: '2rem', paddingLeft: '2rem' }}
          />
          {/* <div className="our-solution-data-white-right-description">
            {props.description}
          </div> */}
          <BulletPoints description={props.description} />
        </div>
      </div>
    </div>
  )
}

export { OurSolutionDataBlue, OurSolutionDataWhite }
