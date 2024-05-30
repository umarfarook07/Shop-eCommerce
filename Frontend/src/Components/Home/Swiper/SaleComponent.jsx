import React from 'react'
import './SaleComponent.css'

const SaleComponent = (props) => {
  return (
    <div className='sale-component'>
      <h2>Exclusive Season Sale</h2>
      <h1>Up to 50% Off on {props.cat} Wear</h1>
      <p>Discover our latest collection of {props.cat} fashion items with incredible discounts.</p>
      <button>SHOP NOW</button>
    </div>
  )
}

export default SaleComponent