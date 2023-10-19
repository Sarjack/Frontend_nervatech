import React from 'react'
import Card from './Card'
import StarsCanvas from './StarCanvas'
import { explore } from '../data'

const ManufacturerDistributor = () => {
  function goToManufacturer(event) {
    event.preventDefault()
    window.location.href = '/manufacturer'
  }
  function goToBuyer(event) {
    event.preventDefault()
    window.location.href = '/buyer'
  }
  return (
    <div id="explore" className="explore">
      <div className="manufacturers">
        <Card
          title={'For Manufacturers'}
          onClick={goToManufacturer}
          description={explore.forManufacturerDescription}
          bgurl={explore.forManufacturerImgSrc}
        />
      </div>
      <div className="distributors">
        <Card
          title={'For Buyers'}
          onClick={goToBuyer}
          description={explore.forManufacturerDescription}
          bgurl={explore.forBuyerImgSrc}
        />
      </div>
      {/* <StarsCanvas /> */}
    </div>
  )
}

export default ManufacturerDistributor
