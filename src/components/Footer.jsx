import React, { useState } from 'react'
import NervaLogo from './NervaLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import fontawesome from '@fortawesome/fontawesome'
import axios from 'axios'
import ConfirmationBox from './ConfirmationBox'
import StarsCanvas from './StarCanvas'
import { contactDetails } from '../data'

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons'
// fontawesome.library.add(faLinkedin, faInstagram, faFacebook, faXTwitter)

import confirmationBoxImage from '../images/confirmation/confirmation-img.svg'
const Footer = (props) => {
  const [currentEmail, setCurrentEmail] = useState('')
  const [showConfirmBoxFooter, setShowConfirmBoxFooter] = useState(false)
  function closeConfirmBoxFooter() {
    document.body.classList.remove('popup-open')
    setShowConfirmBoxFooter(false)
  }
  function displayConfirmBoxFooter() {
    window.scrollTo(0, 0)
    document.body.classList.add('popup-open')
    setShowConfirmBoxFooter(true)
  }
  function validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
    return emailRegex.test(email)
  }
  const subscribeSubmit = async () => {
    if (validateEmail(currentEmail)) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/api/v1/subscribe`,
          { email: currentEmail }
        )
        setCurrentEmail('')
        window.scrollTo(0, 0)
        displayConfirmBoxFooter()
      } catch (error) {
        console.error('Error:', error)
        window.alert('Server error! Please contact us through email or phone')
      }
    } else {
      window.alert('Please enter valid email id.')
    }
  }
  const changeCurrentEmail = (event) => {
    const newEmail = event.target.value

    setCurrentEmail(newEmail)
  }
  return (
    <div className="footer">
      {showConfirmBoxFooter ? (
        <ConfirmationBox
          title="Success! Your Email has been received."
          description="Thank you for contacting us! Your email has been received successfully. You can also will the form to get response via phone. We'll get back to you as soon as possible. In the meantime, feel free to explore our website for more information about our services."
          buttonText="OKAY!"
          imgSrc={confirmationBoxImage}
          onClose={closeConfirmBoxFooter}
          isVisible={showConfirmBoxFooter}
        />
      ) : null}
      <div className="footer-content">
        <div className="email-subscribe">
          <div className="email-subscribe-text">For Latest Updates:</div>
          <div className="email-subscribe-data">
            <input
              type="email"
              className="email-subscribe-input"
              placeholder="Email"
              value={currentEmail}
              onChange={changeCurrentEmail}
            />
            <button
              onClick={subscribeSubmit}
              className="email-subscribe-submit"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="quick-links">
          <div className="quick-links-container">
            <div className="quick-links-title">Quick Links</div>
            <div className="quick-links-data">
              <div className="quick-links-left">
                <ul>
                  <li>
                    <a href="/manufacturer">Manufacturers</a>
                  </li>
                  <li>
                    <a href="/contact"> Contact Us </a>
                  </li>
                </ul>
              </div>
              <div className="quick-links-right">
                <ul>
                  <li>
                    <a href="/buyer">Buyers</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="footer-brand">
          <NervaLogo textStyle={{ fontSize: 'xx-large' }} />
          <div className="footer-brand-slogan">
            <span>Grow your business,</span>
            <span> faster and smarter!</span>
          </div>
          <div className="footer-social-media">
            <ul>
              <li>
                <a href={`tel:${contactDetails.phone}`}>
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="xl"
                    style={{ color: '#582f92' }}
                    className="social-icon-hover"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href={`mailto:${contactDetails.email}`}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="xl"
                    style={{ color: '#582f92' }}
                    className="social-icon-hover"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href={contactDetails.linkedInURL}>
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="xl"
                    style={{ color: '#582f92' }}
                    className="social-icon-hover"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    size="xl"
                    style={{ color: '#582f92' }}
                    className="social-icon-hover"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright &copy; 2023. Nerva. All rights reserved.
      </div>
      {/* <StarsCanvas /> */}
    </div>
  )
}

export default Footer
