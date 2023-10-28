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