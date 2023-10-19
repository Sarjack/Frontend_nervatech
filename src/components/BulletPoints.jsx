import React from 'react'

const BulletPoints = (props) => {
  const { description } = props
  return (
    <div className="bullet-points">
      <ul>
        {description.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  )
}

export default BulletPoints
