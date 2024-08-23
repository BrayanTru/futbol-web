import axios from "axios";


const personajes = async (state) => {
    const peticion = await axios.get('https://fakestoreapi.com/products')
    state(peticion.data)
}



export {
    personajes
}