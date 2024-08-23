import React from 'react'
import './Main.css'
import tejonot from '../../assets/noticia.png'
import futnot from '../../assets/noticia2.jpg'
import tejonot2 from '../../assets/noticia1.jpg'
import cristiano from '../../assets/cristiano.jpg'
import dinho from '../../assets/ronaldinho.webp'
import messi from '../../assets/messi.jpg'
import mbappe from '../../assets/mbappe.jpg'

const Main = () => {
  return (
      <main className="main_cont">
        <h1>
            ÚLTIMA PUBLICACIÓN
        </h1>
        <section className="main__section1">
            <div className="div__section1">
                <div className="card_noti">
                    <img src={cristiano} alt="" className="imagen_noti" />
                </div>
                <div className="card_noti">
                    <img src={dinho} alt="" className="imagen_noti" />
                </div>
                <div className="card_noti">
                    <img src={messi} alt="" className="imagen_noti" />
                </div>
                <div className="card_noti">
                    <img src={mbappe} alt="" className="imagen_noti" />
                </div>
            </div>
        </section>
        <section className="main__section2">
            <h3>Más publicaciones</h3>
            <div>
                <img src={tejonot} alt="" />
                <p>Ven y disfruta de nuestro campeonato de tejo, los dias 3 y 4 de junio.</p>
            </div>
            <div>
                <img src={futnot} alt="" />
                <p>El 23 de julio tendremos el gran campeonato de futbol, ven y disfruta 8:00pm</p>
            </div>
            <div>
                <img src={tejonot2} alt="" />
                <p>Nuestro jugador estrella, se destaco a nivel nacional en el campeonato de tejo en la ciudad de Bogota el dia 3/5/2023</p>
            </div>
        </section>
      </main>
  )
}

export default Main;