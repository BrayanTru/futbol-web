import React from 'react'
import './CateMain.css'
import cancate from '../../assets/cancate.jpg';
import balon from '../../assets/bola.jpg';
import niños from '../../assets/niños.jpg';
import tejo1 from '../../assets/tejo1.webp';
import tejo2 from '../../assets/tejo2.webp';
import tejo3 from '../../assets/tejo3.jpg';


const CateMain = () => {
  return (
    
    <main className="category-main">
      <div className="container_category">
        <h1>Categorías</h1>
        <div className="categorias">
          
          <div className="categoria futbol">
            <h2>Fútbol 5</h2>
            <div className="items-grid">
              
              <div className="item">
                <img src={cancate} alt="Cancha Premium" />
                <div className="desc">
                  <h3>Cancha Premium</h3>
                  <p>
                    Nuestra Cancha Premium es la elección perfecta para quienes
                    buscan una experiencia superior.
                  </p>
                  <h4>
                    $130.000
                  </h4>
                </div>
              </div>
              
              <div className="item">
                <img src={balon} alt="Cancha Estándar" />
                <div className="desc">
                  <h3>Cancha Estándar</h3>
                  <p>
                    La Cancha Estándar es ideal para juegos amigables y
                    entrenamientos.
                  </p>
                  <h4>
                    $70.000
                  </h4>
                </div>
              </div>
              
              <div className="item">
                <img src={niños} alt="Alquiler de Canchas" />
                <div className="desc">
                  <h3>Alquiler de Canchas</h3>
                  <p>
                    Ofrecemos opciones de alquiler por hora para grupos y
                    equipos.
                  </p>
                  <p>
                    Disfruta de nuestras canchas con todas las comodidades que
                    ofrecemos para ti y tus amigos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="categoria tejo">
            <h2>Tejo</h2>
            <div className="items-grid">
              
              <div className="item">
                <img src={tejo1} alt="Cancha de Tejo Profesional" />
                <div className="desc">
                  <h3>Cancha de Tejo Profesional</h3>
                  <p>
                    Nuestra Cancha de Tejo Profesional es perfecta para quienes
                    buscan una experiencia de juego auténtica.
                  </p>
                  <h4>
                    $110.000
                  </h4>
                </div>
              </div>
              
              <div className="item">
                <img src={tejo2} alt="Cancha de Tejo Casual" />
                <div className="desc">
                  <h3>Cancha de Tejo Casual</h3>
                  <p>
                    La Cancha de Tejo Casual es ideal para principiantes y
                    aquellos que buscan disfrutar de una partida amistosa.
                  </p>
                  <h4>
                    $60.000
                  </h4>
                </div>
              </div>
              
              <div className="item">
                <img src={tejo3} alt="Alquiler de Canchas de Tejo" />
                <div className="desc">
                  <h3>Alquiler de Canchas de Tejo</h3>
                  <p>También ofrecemos alquiler de nuestras canchas de tejo.</p>
                  <p>
                    Reserva tu horario y disfruta de este juego tradicional en
                    nuestras instalaciones de primera calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

export default CateMain;