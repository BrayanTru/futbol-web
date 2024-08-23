import React, { useEffect, useState } from "react";
import "./Apii.css";
import { personajes } from "../utils/funciones";

const Apii = () => {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    personajes(setCharacters);
  }, []);

  return (
    <>
  
    <main className="container_main">
    <div className="row">
      {characters !== null ? (
        characters.map((character) => (
          <div className="informacion" key={character.id}>
            <div className="card_personajes">
                <img
                  src={character.image}
                  className="img_api"
                  alt=""
                />
              <div className="aleatorio">
                <h6 className="title">
                    {character.title}
                </h6>
                <p>Precio: {character.price}</p>
                <p>Categoria: {character.category}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No hay accesorios ni prendas para mostrar.</p>
      )}
      </div>
      </main>
    </>
  );
};

export default Apii;
