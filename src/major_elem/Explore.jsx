import React from 'react'
import tomatoRight from "../assets/images/tomato-right.jpg"
import Button from "../minor_elem/Button";

const Explore = () => {
  return (
    <section className='explore'>
        <div className="left-part">
            <h1>Помідорний рай</h1>
            <h3>На цьому сайті ви зможете куплати накращі помідори від легендарного Єгора</h3>
            <Button
                className="button"
                padding="13px 29px"
                backgroundColor="#5B1901"
                textColor="#ffffff"
            >Дізнатись більше</Button>
        </div>
        <div className="left-part">
            <img src={tomatoRight} alt="" />
        </div>
    </section>
  )
}

export default Explore