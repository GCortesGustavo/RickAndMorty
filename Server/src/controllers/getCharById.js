// const axios = require("axios"); //exportamos axios


// const URL = "https://rickandmortyapi.com/api/character" //api

// const getCharById = (req, res) => { //solicitud: res, respuesta : res
//     const {id} = req.params; //se extrae el paramentro id con destructuring.
    
//     axios(`${URL}/${id}`) //Solicitud a la api para obtener informacion de un personaje especifico
//     .then(response => response.data)
//     .then(({status, name, species, origin, image, gender}) => { //destructuring del personaje
//         if(name) { 
//             const character = { //se crea el objeto que contiene la info del personaje
//                 id, 
//                 name,
//                 species,
//                 origin, 
//                 image,
//                 gender,
//                 status
//             }
            
//             return res.status(200).json(character); //se devuelve una respuestaOK con el objeto character como JSON
//         }
        
//         return res.status(404).json("Not Found") //Si el nombre no se encuentra en la respuesta, se deuvelve un errror 404 con el mensaje "Not Found"
//     })
//     .catch((error) => res.status(500).json({message: error.message})) //Si se produce un error al obtener la respuesta de la Api se deuvelve un error 500 y el objto JSOPN tien un mensaje de error
// }

// module.exports = {getCharById} //se exporta la funcion para que pueda ser utilizada por otros modulos

const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res)=> {
    try {
        const { id } = req.params
        const  { status, name, species, origin, image, gender } = (await axios(URL + id)).data

        const character = {
            id,
            name,
            status,
            species,
            origin,
            image,
            gender
        }

        return character.name ? 
            res.status(200).json(character) 
            : 
            res.status(404).send('Character not found')
    } 
    catch (error) {
        return res.status(500).send(error.message)
    }
    
}

module.exports = {
    getCharById
}