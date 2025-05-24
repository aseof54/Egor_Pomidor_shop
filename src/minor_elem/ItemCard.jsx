import React from 'react'

const ItemCard = ({
  image,
  itemName,
  itemDesc,
  price
}) => {
  return (
    <div className="item">
      <img className='img' src={image} alt="" />
      <div className="texts">
        <p className='Maintext'>{itemName}</p>
        <p className='Desc'>{itemDesc}</p>
        <span className='Price'>{price}</span>
      </div>
    </div>
  )
}

export default ItemCard