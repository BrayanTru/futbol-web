import React from "react";
import "./NosotrosMain.css";
import face from '../../assets/face.webp'
import insta from '../../assets/insta.png'
import twit from '../../assets/twitter.png'
import estadio1 from '../../assets/estadio1.jpg'
import estadio2 from '../../assets/estadio2.jpg'
import estadio3 from '../../assets/estadio3.jpg'
import whatsapp from '../../assets/icon-whatsapp.svg'

const NosotrosMain = () => {
  return (
    <main className="nosotros_main">
      <div className="container_slider">
        <div className="img-slider">
          <img className="img-empresa" src={estadio1} alt="Logo de la Empresa" />
          <img className="img-empresa" src={estadio2} alt="Imagen 1" />
          <img className="img-empresa" src={estadio3} alt="Imagen 2" />
        </div>
      </div>

      <div className="container_nosotros">
        <div className="quienes-somos">
          <h1>Quiénes Somos</h1>
          <div className="texto-nosotros">
            <p>
              Somos una empresa comprometida con brindar la mejor experiencia en
              juegos de tejo y fútbol 5. Con años de experiencia y un equipo
              apasionado por el deporte, buscamos siempre mejorar y brindar un
              servicio de primera calidad a nuestros clientes.
            </p>
          </div>
        </div>
        <a href="https://wa.me/573135498556" className="btn-whatsapp">
            <img src={whatsapp} alt="Contactar por whatsapp" />
        </a>
        <div className="redes-sociales">
          <h2>Síguenos en nuestras redes sociales</h2>
          <div className="logos-redes">
            <a href="https://www.facebook.com/">
              <img src={face} alt="Facebook" />
            </a>
            <a href="https://twitter.com/?lang=es">
              <img src={twit} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={insta} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NosotrosMain;
