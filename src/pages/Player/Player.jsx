import React from 'react'
import './Player.css'
import Navi from '../../components/Navi/Navi'
import hero_banner from '../../assets/movie.jpg'
import hero_title from '../../assets/title.webp'
import netflix_title from '../../assets/titl.webp'
import play from '../../assets/play.png'
import info from '../../assets/info-button.png'

const Player = () => {
  return (
    <div className='player'>
        <Navi/>
        <div className="hero">
        <img src={hero_banner} alt='' className='banner-img'/>
        <div className="hero-caption">
        <img src={netflix_title} alt='' className='caption-img1'/>
        <img src= {hero_title} alt='' className='caption-img'/>
        <p>
        An aspiring musician agrees to a marriage of convenience with a soon-to-deploy Marine, but a tragedy soon turns their fake relationship all too real.
        </p>
        <div className="hero-btns">
          <button className='btn'><img src={play} alt=''/>Play</button>
          <button className='btn dark-btn'><img src={info} alt=''/>More Info</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Player
