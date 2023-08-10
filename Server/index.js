const {conn} = require("./src/DB_connection")

const express = require ("express") //importamos express
const server = express(); //ejecutamos express
const PORT = 3001; //el servidor escuchado en el 3001
const router = require("./src/routes/index")
const morgan = require("morgan")

server.use(express.json());
server.use(morgan("dev"))

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use("/rickandmorty", router)

server.listen(PORT, () => { // el servidor escucha en el port
    conn.sync({force : true})
    console.log("Server listen in port: " + PORT) //en la consola nos retorna en donde esta escuchando el servidor
})
