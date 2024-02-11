import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram,faTelegram } from '@fortawesome/free-brands-svg-icons';
import "./footer.css"
function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer ">
        <div className="social-links d-flex justify-content-center align-items-center">
          <NavLink className="nav-item" to="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} width={25} />FaceBook</NavLink>
          <NavLink className="nav-item" to="https://twitter.com"><FontAwesomeIcon icon={faTwitter} width={25}/>Twitter</NavLink>
          <NavLink className="nav-item" to="https://www.instagram.com/bilim_najot/"><FontAwesomeIcon icon={faInstagram} width={25} color='red'/>Instagram</NavLink>
          <NavLink className="nav-item" to="https://t.me/bilim_najot"><FontAwesomeIcon icon={faTelegram} width={25} />Telegram</NavLink>
        </div>
        <p className="copyright">
          &copy; {currentYear} Najot Bilim O'quv Markazi. 
        </p>
      </footer>
  )
}

export default Footer