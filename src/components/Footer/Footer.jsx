import React from 'react'
import './Footer.css'
import logo from '../../assets/logo3.jpg'

const Footer = () => {
  return (
      <footer className="footer">
      <div className="footer__addr">
       <img src={logo} alt="logo" className="footer__logo" />
          
       <h2>Contact</h2>
        <br />
        <address>
         3135498556-----3219246329<br />
            <br />
          <a className="footer__btn" href="mailto:example@gmail.com">Email</a>
        </address>
      </div>
    
     <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">About</h2>
  
          <ul className="nav__ul">
           <li>
             <a href="/">Inicio</a>
            </li>
  
           <li>
             <a href="/categorias">Categorias</a>
           </li>
              
           <li>
              <a href="/nosotros">Nosotros</a>
            </li>
         </ul>
       </li>
      
       <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Redes Sociales</h2>
        
         <ul className="nav__ul nav__ul--extra">
           <li>
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
          
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
          
            <li>
              <a href="https://twitter.com/?lang=es">Twitte</a>
           </li>
         </ul>
        </li>
      
        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>
        
          <ul className="nav__ul">
            <li>
             <a href="#">Privacy Policy</a>
            </li>
          
            <li>
             <a href="#">Terms of Use</a>
           </li>
          
           <li>
              <a href="#">Sitemap</a>
           </li>
         </ul>
       </li>
     </ul>
    
     <div className="legal">
       <p>&copy; 2023 Something. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;