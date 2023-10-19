import React from 'react'

const CardButton = (props) => {
  return (
    <div>
      <button
        className="btn-box"
        style={props.style ? props.style : null}
        onClick={props.onClick}
      >
        <span className="btn-text">{props.text}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="btn-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  )
}

export default CardButton
