import React, {useEffect, useRef} from 'react'
import './Navi.css'
import logo from '../../assets/Logo.png?url'
import search_icon from '../../assets/search.png'
import bell_icon from '../../assets/Bell.png'
import profile_icon from '../../assets/profile.jpg'
import drop from '../../assets/drop.png'
import { logout } from '../../firebase'

const Navi = () => {
const navRef = useRef();
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    if(window.scrollY >= 80){
      navRef.current.classList.add('nav-dark')
    }else{
      navRef.current.classList.remove('nav-dark')
    }
  })
},[])
  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt=''/>
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>News & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
      <div className="navbar-right">
        <img src={search_icon} alt='' className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt='' className='icons'/>
        <div className="navbar-profile">
            <img src={profile_icon} alt='' className='profile'/>
            <img src={drop} alt='' className='drop'/>
            <div className="dropdown">
                <p onClick={()=>{logout()}}>Sign out of Netflix</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navi
