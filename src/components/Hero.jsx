import React from 'react'
import Button from './Button'
import LeftBarText from './LeftBarText'
import DescriptionText from './DescriptionText'
import StarsCanvas from './StarCanvas'
const Hero = (props) => {
  function goToContactUs(event) {
    event.preventDefault()
    window.location.href = '/contact'
  }
  const { imgSrc, imgAlt, title: TitleCompo, description, cta } = props.data
  return (
    <div className="hero" style={props.style}>
      <div className="hero-left">
        <div className="hero-left-text">
          <div className="hero-left-title">
            <TitleCompo />
          </div>
          <DescriptionText text={description} />
        </div>
        <div className="hero-left-message">
          <LeftBarText text={cta.text} />
          <div className="hero-left-message-button">
            <Button text={cta.buttonText} onClick={goToContactUs} />
          </div>
        </div>
      </div>
      <div className="hero-right">
        {/* <div> */}
        <img src={imgSrc} alt={imgAlt} />
        {/* </div> */}
      </div>
      {/* <StarsCanvas /> */}
    </div>
  )
}

export default Hero
