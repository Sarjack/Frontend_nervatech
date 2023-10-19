import React from 'react'
import DescriptionText from './DescriptionText'

const MiniCard = (props) => {
  const { imgSrc, imgAlt, title, desc } = props.data
  return (
    <div className="mini-card">
      <div className="mini-card-img">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="mini-card-white-inner"></div>
      <div className="mini-card-white-outer"></div>
      <div className="mini-card-data">
        <div className="mini-card-title">
          <h2>{title}</h2>
        </div>
        <DescriptionText text={desc} />
      </div>
    </div>
  )
}

export default MiniCard
