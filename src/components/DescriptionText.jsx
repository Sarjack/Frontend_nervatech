import React from 'react'

const DescriptionText = (props) => {
  return (
    <div className="text-description text-dark-blue" style={props.style}>
      {props.text.map((data, index) => {
        return (
          <React.Fragment key={index}>
            {data} <br />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default DescriptionText
