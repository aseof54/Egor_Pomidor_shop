import React from 'react'
import BigCard from '../minor_elem/BigCard'
import Ketchup from '../assets/images/Ketchup.png'
import Pizza from '../assets/images/tomato pizza.png'
import Tomato from '../assets/images/one tomato.png'

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
            bgImage={Tomato}
            bgColor='#F8F1F1'
            name='Свіжі помідори'
        ></BigCard>
        <BigCard
            bgImage={Pizza}
            bgColor='#F8F1F1'
            name='Готові страви'
        ></BigCard>
      </div>
    </section>
  )
}

export default Collections
