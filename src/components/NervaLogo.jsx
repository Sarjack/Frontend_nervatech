import React from 'react'
import { nervaBranding } from '../data'
const NervaLogo = (props) => {
  return (
    <div className="nerva-logo">
      <a className="nerva-logo" href="/">
        <div className="nerva-logo-img" style={props.imgStyle}>
          <img src={nervaBranding.logo} alt="" />
        </div>
        <div className="nerva-logo-text" style={props.textStyle}>
          NERVA
        </div>
      </a>
    </div>
  )
}

export default NervaLogo
