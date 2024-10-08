import React from 'react'
import './ContacMain.css'

const ContacMain = () => {
  return (
    <main className="main_contac">
    <div className="contact_form">

        <div className="formulario">      
          <h1>Contáctanos</h1>
            <h3>Escríbenos y en breve nos pondremos en contacto contigo</h3>
    
    
              <form action="submeter-formulario.php" method="post">       
    
                
                    <p>
                      <label for="nombre" className="colocar_nombre">Nombre
                        <span className="obligatorio">*</span>
                      </label>
                        <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre" />
                    </p>
                  
                    <p>
                      <label for="email" className="colocar_email">Email
                        <span className="obligatorio">*</span>
                      </label>
                        <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email" />
                    </p>
                
                    <p>
                      <label for="telefone" className="colocar_telefono">Teléfono
                      </label>
                        <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono" />
                    </p>       
                  
                    <p>
                      <label for="asunto" className="colocar_asunto">Asunto
                        <span className="obligatorio">*</span>
                      </label>
                        <input type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe un asunto" />
                    </p>    
                  
                    <p>
                      <label for="mensaje" className="colocar_mensaje">Mensaje
                        <span className="obligatorio">*</span>
                      </label>                     
                                        <textarea name="introducir_mensaje" className="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea> 
                                    </p>                    
                  
                    <button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>
    
                    <p className="aviso">
                      <span className="obligatorio"> * </span>los campos son obligatorios.
                    </p>          
                
              </form>
        </div>  
      </div>
      </main>
  )
}

export default ContacMain