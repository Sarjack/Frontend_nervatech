import React from 'react'
import EnquiryForm from '../components/EnquiryForm'
import ContactInfo from '../components/ContactInfo'

const ContactUsFormScreen = (props) => {
  return (
    <div className="contact-us">
      <EnquiryForm />
      <ContactInfo />
    </div>
  )
}

export default ContactUsFormScreen
