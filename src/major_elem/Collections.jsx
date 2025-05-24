import React from 'react'
import BigCard from '../minor_elem/BigCard'
import Ketchup from '../assets/images/Ketchup.png'

const Collections = () => {
  return (
    <section className='collections'>
      <div className="headlines">
        <h1 className='headline'>Колекції</h1>
        <p className='desc'>Купляйте те, що подобається</p>
      </div>
      <div className="cards">
        <BigCard
            bgImage={Ketchup}
            bgColor='#F8F1F1'
            name='Кетчупи та пасти'
        ></BigCard>
        <BigCard
            bgImage={Ketchup}
            bgColor='#F8F1F1'
            name='Кетчупи та пасти'
        ></BigCard>
        <BigCard
            bgImage={Ketchup}
            bgColor='#F8F1F1'
            name='Кетчупи та пасти'
        ></BigCard>
      </div>
    </section>
  )
}

export default Collections
