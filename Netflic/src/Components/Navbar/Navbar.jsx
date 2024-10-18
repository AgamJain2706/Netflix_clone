import  { useEffect, useRef } from 'react'
import Logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import Bell from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

import './Navbar.css'
const Navbar = () => {
  const navRef = useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if (window.scrollY>=80) {
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div className='navbar'  ref={navRef}>

      <div className="navbar-left">
        <img src={Logo} alt="NetflixLogo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular </li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="searchIcon" className='icons' />
        <p>children</p>
        <img src={Bell} alt="searchIcon" className='icons' />
        <div className="navbar-profile">
        <img src={profile_img} alt="profileIcon" className='profile' />
        <img src={caret_icon} alt="caretIcon" />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar