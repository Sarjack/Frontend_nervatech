import React from 'react'
import Button from './Button'
import StarsCanvas from './StarCanvas'

const ContactUs = (props) => {
  function goToContactUs(event) {
    event.preventDefault()
    window.location.href = '/contact'
  }
  const { CTAText, CTAButtonText } = props
  return (
    <div className="cta-section" id="cta">
      <div className="cta-section-left">
        <img src={props.imgSrc} alt="" />
      </div>
      <div className="cta-section-right">
        <div className="cta-section-right-text">
          <CTAText />
          {/* <span className="text-dark-blue text-bold">Let's discuss </span>
          <span>
            how we can tailor these features to our specific manufacturing needs
            and objectives.
          </span> */}
        </div>
        <div className="cta-section-right-button">
          <Button
            text={CTAButtonText}
            onClick={goToContactUs}
            style={{
              // backgroundColor: '#',
              // color: '#2c3792',
              // border: 'none',
              fontSize: '1.2rem',
              paddingTop: '0.7rem',
              paddingBottom: '0.7rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
            }}
          />
        </div>
      </div>
      {/* <StarsCanvas /> */}
    </div>
  )
}

export default ContactUs
