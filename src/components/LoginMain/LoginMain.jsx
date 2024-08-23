import React from 'react'
import './LoginMain.css'
import balon from '../../assets/balon.jpg'

const LoginMain = () => {
  return (
    <main className="resgistro_main">
      <div className="container_registro">
        <div className="formularios_registro">
          <h1>Bienvenido a Juegos de Tejo y Fútbol 5</h1>

          <div className="login">
            <h2>Iniciar sesión</h2>
            <form>
              <label for="login-email">Correo electrónico:</label>
              <input type="email" id="login-email" required />
              <label for="login-password">Contraseña:</label>
              <input type="password" id="login-password" required />
              <button type="submit">Iniciar sesión</button>
            </form>
          </div>

          <div className="register">
            <h2>Registrarse</h2>
            <form>
              <label for="register-name">Nombre:</label>
              <input type="text" id="register-name" required />
              <label for="register-email">Correo electrónico:</label>
              <input type="email" id="register-email" required />
              <label for="register-password">Contraseña:</label>
              <input type="password" id="register-password" required />
              <button type="submit">Registrarse</button>
            </form>
          </div>
        </div>
        <div className="escudo">
          <img className="img_registro" src={balon} alt="" />
        </div>
      </div>
    </main>
  )
}

export default LoginMain;