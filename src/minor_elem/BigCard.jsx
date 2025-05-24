import React from 'react'

const BigCard = ({
    bgImage,
    bgColor,
    name
}) => {
  return (
    <div className='card'>
        <div className="image">
            <img className='img' src={bgImage} alt=""/>  
        </div>           
        <h5 className='name'>{name}</h5>
    </div>
  )
}

export default BigCard
