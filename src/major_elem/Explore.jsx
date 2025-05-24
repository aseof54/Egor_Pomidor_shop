import React from 'react'
import farmer from "../assets/images/Tomato-farmer.png"
import Button from "../minor_elem/Button";

const Explore = () => {
  return (
    <section className='explore'>
        <div className="left-part">
            <h1>Помідорний рай</h1>
            <h3>На цьому сайті ви зможете купляти накращі помідори від легендарного Єгора</h3>
            <Button
                className="button"
                padding="13px 29px"
                backgroundColor="#D62828"
                textColor="#ffffff"
            >Дізнатись більше</Button>
        </div>
        <div className="right-part">
            <div className="circle">
              <img src={farmer} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Explore