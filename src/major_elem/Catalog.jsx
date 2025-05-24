import React from 'react'
import Ketchup from '../assets/images/Ketchup.png'
import Tomato from '../assets/images/one tomato.png'
import Pizza from '../assets/images/tomato pizza.png'
import Paste from '../assets/images/tomato paste.png'
import ItemCard from '../minor_elem/ItemCard'
import Button from '../minor_elem/Button'

const Catalog = () => {
  return (
    <section className='Catalog'>        
        <div className="arrivals">
            <h1 className='Up-text'>Наші товари</h1>
            <div className="cards">
                <ItemCard
                    image={Ketchup}
                    itemName="Кетчуп"
                    itemDesc="Червона рідина. Не використовувати на спагетті!!!"
                    price="52₴"
                ></ItemCard>
                <ItemCard
                    image={Tomato}
                    itemName="Помідор"
                    itemDesc="Класичний товар Єгора. Найкращий в світі!"
                    price="80₴ за 1 кг"
                ></ItemCard>
                <ItemCard
                    image={Paste}
                    itemName="Томатна паста"
                    itemDesc="Кетчуп, але елегантінше, і з натуральних томатів"
                    price="85₴"
                ></ItemCard>
                <ItemCard
                    image={Pizza}
                    itemName="Помідорна піца"
                    itemDesc="Піца, зроблена з помідорів. Без кетчупу"
                    price="170₴"
                ></ItemCard>
            </div>
            <Button
                className="button"
                padding="14px 34px"
                backgroundColor="#D62828"
                textColor="#ffffff"
            >Більше товарів</Button>
        </div>
    </section>
  )
}

export default Catalog