import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import background from '../../assets/b.jpg'
import { useNavigate } from "react-router-dom";
  

const Home = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/play");
  }

  return (
    <div className='home'>
      <Navbar/>
      <div className="main">
      <img src={background} alt='' className='background'></img>
      </div>
      <div className="text">
        <p className='p1'>Unlimited movies, TV<br></br> shows and more.</p>
        <p className='p2'>Starts at free. Rewind at any time.</p>
        <p className='p3'>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
      <div className="member">
        <input type='text' placeholder='Email Address' className='email' required></input>
        <button type='submit' className='button' onClick={handleButtonClick}>Get Started</button>
      </div>
    </div>
  )
}

export default Home
