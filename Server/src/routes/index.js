const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites")

const router = require("express").Router() //se crea el enrutador

router.get( "/character/:id", (req, res) => {
    getCharById(req,res); //se encarga de manejar la solicitud y la respuesta
} )

router.get("/login", (req, res) => {
    login(req, res); //se encarga de manejar la solicitud y la respuesta
})

router.post("/fav", (req, res) => {
    postFav(req, res); //se encarga de manejar la solicitud y la respuesta
})

router.delete("/fav/:id", (req, res) => {
    deleteFav(req, res); //se encarga de manejar la solicitud y la respuesta
})



module.exports = router; // se exporta el modulo