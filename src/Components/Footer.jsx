import React from 'react';
import './Footer.jsx';
import './Footer.css';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import twitter from '../Images/twitter.png';
import linkedin from '../Images/linkedin.png';

const Footer= ()=> {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links-div'>
            <h4>Course Level</h4>
              <a href="/employer">
                  <p>Beginner</p>
              </a>
              <a href="/helathplan">
                  <p>Professional</p>
              </a>
              <a href="/individual">
                  <p>Advanced</p>
              </a>
              <a href="/individual">
                  <p>Expert</p>
              </a>
          </div>
          <div className='sb__footer-links-div'>
            <h4>Resource</h4>
              <a href="/employer">
                  <p>Resource center</p>
              </a>
              <a href="/helathplan">
                  <p>Testimonials</p>
              </a>
              <a href="/individual">
                  <p>Community</p>
              </a>
          </div>
          <div className='sb__footer-links-div'>
            <h4>Partners</h4>
                <a href="/employer">
                    <p>Swings Tech</p>
                </a>
          </div>
          <div className='sb__footer-links-div'>
            <h4>Company</h4>
                <a href="/employer">
                    <p>About</p>
                </a>
                <a href="/employer">
                    <p>Event</p>
                </a>
                <a href="/employer">
                    <p>Career</p>
                </a>
                <a href="/employer">
                    <p>Contact</p>
                </a>
          </div>
          <div className='sb__footer-links-div'>
              <h4>Social Media</h4>
              <div className='socialmedia'>
                  <p><img className='w-8 h-8' src={facebook} alt="" /></p>
                  <p><img className='w-8 h-8' src={twitter} alt="" /></p>
                  <p><img className='w-8 h-8' src={instagram} alt="" /></p>
                  <p><img className='w-8 h-8' src={linkedin} alt="" /></p>
                  
              </div>
          </div>
        </div>

        <hr />
        <div className='sb__footer-below'>
            <div className='sb__footer-copyright'>
              <p>
                &copy; {new Date().getFullYear()} All Right Reserved.
              </p>
            </div>
            <div className='sb__footer-below-links'>
                <a href="terms"><div><p>Terms & condition</p></div></a>
                <a href="terms"><div><p>Privacy & Policy</p></div></a>
                <a href="terms"><div><p>Security</p></div></a>
                <a href="terms"><div><p>Cookies</p></div></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;