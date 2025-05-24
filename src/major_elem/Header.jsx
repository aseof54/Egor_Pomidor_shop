import React from 'react'
import logo from "../assets/images/Logo.png"
import Button from "../minor_elem/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
        <img src={logo} alt="logo" />
        <div className="menu">
            <Button
                padding="13px 29px"
                backgroundColor="#3A5A40"
                textColor="#ffffff"
            >
            Купити
            </Button>
            <Button
                padding="13px 29px"
                backgroundColor="#3A5A40"
                textColor="#ffffff"
            >
            Про нас
            </Button>
        </div>
    </header>
  )
}

export default Header