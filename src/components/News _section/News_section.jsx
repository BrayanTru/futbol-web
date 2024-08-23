import React from 'react'
import './News_section.css'
import cancha1 from '../../assets/cancha1.jpg';
import cancha2 from '../../assets/cancha3.jpg';
import cancha3 from '../../assets/cancha2.jpg';

const News_section = () => {
    return (
        <section className="news_section">
            <div>
                <img src={cancha1} alt="" />
                <p>Tenemos las mejores canchas de fútbol 5 de la ciudad de Neiva, los mejores escenarios para disfrutar del fútbol.</p>
            </div>
            <div>
                <img src={cancha2} alt="" />
                <p>Los apasionados del tejo prefieren nuestras instalaciones, contamos con grandes espacios para que disfrutes con amigos y familiares.</p>
            </div>
            <div>
                <img src={cancha3} alt="" />
                <p>Contamos con sistema de techo en una de nuestras canchas premium, ni la lluvia nos detiene.</p>
            </div>
        </section>
    )
  }
  
  export default News_section;