import React from 'react'
import './Header.css'

const Header = () => {
  return (
      <header className="header">
        <h1 className="header__h1">FUTBOL 5 Y TEJO</h1>
        <p className="header__p">"La pasión se vive en la cancha y en el tejo, únete a nuestra comunidad y vive el juego al máximo."</p>
        <div className="head_btn">
          <button className="btn__head">
            Leer mas
          </button>
        </div>
      </header>   
  )
}

export default Header;