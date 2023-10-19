import React from 'react'
import Button from './Button'
import LeftBarText from './LeftBarText'
import DescriptionText from './DescriptionText'
import StarsCanvas from './StarCanvas'
const AboutUsHero = (props) => {
  const { imgSrc, imgAlt, title: TitleCompo, description, cta } = props.data
  return (
    <div className="hero" style={props.style}>
      <div className="hero-left">
        <div className="hero-left-message">
          <LeftBarText text={cta.text} />
          <DescriptionText text={description} />
          <div className="hero-left-message-button">
            <Button text={cta.buttonText} onClick={cta.buttonOnClick} />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <StarsCanvas />
    </div>
  )
}

const styles = {}
export default AboutUsHero
