import React from 'react'
import DescriptionText from './DescriptionText'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSquarePhone,
  faSquareEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { contactDetails } from '../data'
import axios from 'axios'
import ConfirmationBox from './ConfirmationBox'
import { useState } from 'react'
import StarsCanvas from './StarCanvas'
import confirmationBoxImage from '../images/confirmation/confirmation-img.svg'
import { enquiryFormData } from '../data'

const EnquiryForm = (props) => {
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  function closeConfirmBox() {
    document.body.classList.remove('popup-open')
    setShowConfirmBox(false)
  }
  function displayConfirmBox() {
    window.scrollTo(0, 0)
    document.body.classList.add('popup-open')
    setShowConfirmBox(true)
  }
  function isValidPhoneNumber(phoneNumber) {
    var regex = /^[0-9]{10}$/
    return regex.test(phoneNumber)
  }

  const submitForm = async (event) => {
    //ecent prevent default
    event.preventDefault()
    //form data
    const formData = new FormData(event.target)
    const formDataObject = {}

    // Convert FormData to a JavaScript object
    formData.forEach((value, key) => {
      formDataObject[key] = value
    })

    if (!isValidPhoneNumber(formDataObject.phone)) {
      window.alert(
        'Please enter a valid 10 digit phone number (Without any spaces and country code)'
      )
      return
    }
    // Log the form data to the console
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/v1/contact`,
        formDataObject
      )
      document.getElementById('enquiry-details').reset()
      window.scrollTo(0, 0)
      displayConfirmBox()
    } catch (error) {
      console.error('Error:', error)
      window.alert('Server error! Please contact us through email or phone')
    }
  }

  return (
    <div className="enquiry-form" id="enquiry">
      {showConfirmBox ? (
        <ConfirmationBox
          title="Success! Your Form has been Submitted"
          description="Thank you for your submission. Our team will review your information and get in touch with you shortly. If you have any further questions or require immediate assistance, please don't hesitate to reach out to us. We appreciate your interest in our services."
          buttonText="OKAY!"
          imgSrc={confirmationBoxImage}
          onClose={closeConfirmBox}
          isVisible={showConfirmBox}
        />
      ) : null}
      <div className="enquiry-form-left">
        <div className="enquiry-form-left-title">
          <h1>{enquiryFormData.title}</h1>
          <DescriptionText text={enquiryFormData.description} />
        </div>
        <div className="enquiry-form-left-img">
          <img src={enquiryFormData.imgSrc} alt="enquiry-img" />
        </div>
        <div className="enquiry-form-left-contact">
          <div className="enquiry-form-left-contact-gap">
            <FontAwesomeIcon
              icon={faSquarePhone}
              size="2xl"
              style={{ color: '#2c3792', scale: '1.2' }}
            />
            <h4>{contactDetails.phone}</h4>
          </div>
          <div className="enquiry-form-left-contact-gap">
            <FontAwesomeIcon
              icon={faSquareEnvelope}
              size="2xl"
              style={{ color: '#2c3792', scale: '1.2' }}
            />
            <h4>{contactDetails.email}</h4>
          </div>
        </div>
      </div>
      <div className="enquiry-form-right">
        <form onSubmit={submitForm} id="enquiry-details">
          <div className="enquiry-form-element">
            <label> Full Name *</label>
            <input
              type="text"
              name="personName"
              id="personName"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className="enquiry-form-element">
            <label> Email *</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Eg. your@email.com"
              required
            />
          </div>
          <div className="enquiry-form-element">
            <label htmlFor="phone"> Phone Number *</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone number with country code"
              required
            />
          </div>
          <div className="enquiry-form-element">
            <label htmlFor="Company Name"> Company Name *</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Your Company Name"
              required
            />
          </div>
          <div className="enquiry-form-element">
            <label htmlFor="message"> Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Can we know more about your inquiry..."
            ></textarea>
          </div>
          <div className="enquiry-form-button">
            <Button
              text="Submit"
              type="submit"
              style={{
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                fontSize: '1.5rem',
                borderRadius: '10px',
                fontWeight: '500',
              }}
            />
          </div>
        </form>
      </div>
      <StarsCanvas />
    </div>
  )
}

export default EnquiryForm
