import React from 'react'

const LeftBarText = (props) => {
  return (
    <div className="left-bar-text" style={props.style}>
      {props.text}
    </div>
  )
}

export default LeftBarText
