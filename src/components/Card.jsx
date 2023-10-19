import React from 'react'
import LeftBarText from './LeftBarText'
import DescriptionText from './DescriptionText'
import Button from './Button'
import CardButton from './CardButton'

const Card = (props) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${props.bgurl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        mixBlendMode: 'multiply',
      }}
    >
      <div className="card-info">
        <div className="card-title">
          <LeftBarText text={props.title} style={{ fontSize: 'large' }} />
        </div>
        <div className="card-desc">
          <DescriptionText
            text={[props.description]}
            style={{ textAlign: 'center' }}
          />
        </div>
      </div>
      <div className="card-button">
        <CardButton onClick={props.onClick} text={'Learn More'} />
      </div>
    </div>
  )
}

export default Card
