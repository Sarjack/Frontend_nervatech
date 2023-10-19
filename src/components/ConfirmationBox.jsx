import React from 'react'
import Button from './Button'

const ConfirmationBox = (props) => {
  return (
    <div className="confirmation-box">
      <div className="confirmation-box-close" onClick={props.onClose}>
        x
      </div>
      <div className="confirmation-left">
        <img src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <div className="confirmation-right">
        <div className="confirmation-title">{props.title}</div>
        <div className="confirmation-description">{props.description}</div>
        <div className="confirmation-button">
          <Button
            style={{
              backgroundColor: 'white',
              color: '#6854FC',
              border: 'none',
            }}
            text={props.buttonText}
            onClick={props.onClose}
          />
        </div>
      </div>
    </div>
  )
}

export default ConfirmationBox
