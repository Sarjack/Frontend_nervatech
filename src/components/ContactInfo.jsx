import React from 'react'
import LeftBarText from './LeftBarText'
import DescriptionText from './DescriptionText'
import { contactDetails } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSquarePhone,
  faSquareEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons'

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-info-left">
        <LeftBarText text="Contact Us" />
        <DescriptionText text={contactDetails.description} />
        <div className="contact-info-img">
          <img src={contactDetails.imgSrc} alt="contact-us-img"></img>
        </div>
      </div>
      <div className="contact-info-right">
        <div className="contact-info-right-data">
          <div className="contact-info-right-title">
            <h1>Contact Information</h1>
          </div>
          <div className="contact-info-right-description">
            <span>We will be happy to connect with you.</span>
          </div>
          <div className="contact-info-right-details">
            <a href={`tel:${contactDetails.phone}`}>
              <div className="enquiry-form-left-contact-gap">
                <FontAwesomeIcon
                  icon={faSquarePhone}
                  size="2xl"
                  style={{ color: '#ffffff', scale: '1.2' }}
                />
                <h4>{contactDetails.phone}</h4>
              </div>
            </a>
            <a target="_blank" href={`mailto:${contactDetails.email}`}>
              <div className="enquiry-form-left-contact-gap">
                <FontAwesomeIcon
                  icon={faSquareEnvelope}
                  size="2xl"
                  style={{ color: '#ffffff', scale: '1.2' }}
                />
                <h4>{contactDetails.email}</h4>
              </div>
            </a>
            <a target="_blank" href={contactDetails.linkedInURL}>
              <div className="enquiry-form-left-contact-gap">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2xl"
                  style={{ color: '#ffffff', scale: '1.2' }}
                />
                <h4>{contactDetails.linkedInId}</h4>
              </div>
            </a>
            <a href="">
              <div className="enquiry-form-left-contact-gap">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  size="2xl"
                  style={{ color: '#ffffff', scale: '1.2' }}
                />
                <h4>{contactDetails.facebookId}</h4>
              </div>
            </a>

            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {}
export default ContactInfo
