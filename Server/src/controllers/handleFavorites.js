let myFavorites = []; //Este array almacena los elementos favoritos

const postFav = (req, res) => {
    const character = req.body; // se extrae el objeto character

    myFavorites.push(character) // se pushea el character al array myFavorites

    return res.status(200).json(myFavorites) // se devuelve una respuesta OK al array
}

const deleteFav = (req, res) => {
    const {id} = req.params; //extraemos id de los parametros del character

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id) //se utiliza filter en el array. Esto se hace para verificar si el favorite.id es distinto del id proporcionado. El OPERADOR + se utilizapara conventir un string en un numero

    return res.status(200).json(myFavorites) // se devulve un resultado Ok con la nueva matriz, excluyendo el objeto eliminado
}

module.exports = {
    postFav,
    deleteFav
}