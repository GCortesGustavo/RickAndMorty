// const http = require("http");
// // const data = require("./utils/data");
// const getCharById  = require("./controllers/getCharById")


// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*'); //con esta linea podemos darle permiso al front de que haga cualquier peticion
   
//     if(req.url.includes("/rickandmorty/character/")) {
//         const id= req.url.split("/").at(-1)
//         // substring(request.url.lastIndexOf('/')+1) //usamos el split para que separe en la barra y con el at(-1) toma el ultimo
//         console.log(getCharById(res, id))
//         //const characterFound = data.find((character) => character.id === Number(idd))

//         // response.writeHead(200, { "Content-type" : "application/json"})
//         // response.end(JSON.stringify(characterFound))
//     }

//     // else {
//     //     response.writeHead(404, {"Content-type":"text/html"});
//     //     response.end('<h1 style="text-align:center; color:#ff0000ff">Page not found</h1>')
//     // }

// }).listen(3001, console.log("Puerto escuchado en el 3001"))

const express = require ("express") //importamos express
const server = express(); //ejecutamos express
const PORT = 3001; //el servidor escuchado en el 3001
const router = require("./routes/index")
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
    console.log("Server listen in port: " + PORT) //en la consola nos retorna en donde esta escuchando el servidor
})
