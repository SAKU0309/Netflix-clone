import React from 'react'
import './Nvbar.css'
import logo from '../../assets/Logo.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
  }
  return (
    <div className='navbar'>
    <img src={logo} alt='logo' className='logo'></img>
        <div className="language-selector">
        <select className='language-btn'>
                <option>English</option>
                <option>Hindi</option>
        </select>
    </div>
    <button className="sign-in-btn" onClick={handleButtonClick}>Sign In</button>
    </div>
  )
}
export default Navbar
