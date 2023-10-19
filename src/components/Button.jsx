import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className={'btn-box'} onClick={props.onClick} style={props.style}>
        <span className="btn-text">{props.text}</span>
      </button>
    </div>
  )
}

export default Button
