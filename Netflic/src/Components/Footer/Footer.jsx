import React from 'react'
import './Footer.css'
import Youtube_icon from '../../assets/youtube_icon.png'
import Twitter_icon from '../../assets/twitter_icon.png'
import Insta_icon from '../../assets/instagram_icon.png'
import Fb_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={Fb_icon} alt="" />
        <img src={Insta_icon} alt="" />
        <img src={Twitter_icon} alt="" />
        <img src={Youtube_icon} alt="" />
      </div>
      <div className='Footer-container'>
        <ul>
          <li><u>FAQ</u></li>
          <li><u>Investor Relations</u></li>
          <li><u>Privacy</u></li>
          <li><u>Speed Test</u></li>
        </ul>
        <ul>
          <li><u>Help Center</u></li>
          <li><u>Jobs</u></li>
          <li><u>Cookie Preferences</u></li>
          <li><u>Legal Notices</u></li>
        </ul>
        <ul>
          <li><u>Account</u></li>
          <li><u>Ways to Watch</u></li>
          <li><u>Corporate Information</u></li>
          <li><u>Only on Netflix</u></li>
        </ul>
        <ul>
          <li><u>Media Center </u></li>
          <li><u>Term Of  Use</u></li>
          <li><u>Contact Us</u></li>
        </ul>
      </div>
      <p className='copyright-text'>Copyright © 1997 - 2024 Netflix®. All rights reserved. </p>
    </div>
  )
}

export default Footer