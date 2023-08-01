// const axios = require("axios");

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then((data) => {
//         console.log(data)
//         const character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin?.name,
//             image: data.image,
//             status: data.status
//         }

//         res.writeHead(200, {"Content-type" : "application/json"})
//         res.end(JSON.stringify(character)) // Transforma una response a JSON. Pasar un objeto a un string, manteniendo la estructura json.
//     })
//     .catch(error => {
//         res.writeHead(500, {"Content-type" : "text/plain"})
//         res.end(error.message)
//     })
// }

// const getCharById = (response, id)=>{
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((res)=>{
//         const character = {
//             id: id,
//             name: res.data.name,
//             gender:res.data.gender,
//             species:res.data.species,
//             origin:res.data.origin,
//             image: res.data.image,
//             status: res.data.status
//         }
//         response.writeHead(200, {"Content-type":"application/json"});
//         response.end(JSON.stringify(character));
//     })
//     .catch((error)=>{
//         response.writeHead(500, {"Content-type":"text/plain"});
//         response.end(error.message);
//     })
// }

const axios = require("axios"); //exportamos axios


const URL = "https://rickandmortyapi.com/api/character" //api

const getCharById = (req, res) => { //solicitud: res, respuesta : res
    const {id} = req.params; //se extrae el paramentro id con destructuring.
    
    axios(`${URL}/${id}`) //Solicitud a la api para obtener informacion de un personaje especifico
    .then(response => response.data)
    .then(({status, name, species, origin, image, gender}) => { //destructuring del personaje
        if(name) { 
            const character = { //se crea el objeto que contiene la info del personaje
                id, 
                name,
                species,
                origin, 
                image,
                gender,
                status
            }
            
            return res.status(200).json(character); //se devuelve una respuestaOK con el objeto character como JSON
        }
        
        return res.status(404).json("Not Found") //Si el nombre no se encuentra en la respuesta, se deuvelve un errror 404 con el mensaje "Not Found"
    })
    .catch((error) => res.status(500).json({message: error.message})) //Si se produce un error al obtener la respuesta de la Api se deuvelve un error 500 y el objto JSOPN tien un mensaje de error
}

module.exports = {getCharById} //se exporta la funcion para que pueda ser utilizada por otros modulos
