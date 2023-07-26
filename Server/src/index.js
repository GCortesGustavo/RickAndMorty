const http = require("http");
const data = require("./utils/data");
const { log } = require("console");

http.createServer((request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*'); //con esta linea podemos darle permiso al front de que haga cualquier peticion
   
    if(request.url.includes("/rickandmorty/character")) {
        const idd= request.url.substring(request.url.lastIndexOf('/')+1) //usamos el split para que separe en la barra y con el at(-1) toma el ultimo
        
        const characterFound = data.find((character) => character.id === Number(idd))

        response.writeHead(200, { "Content-type" : "application/json"})
        response.end(JSON.stringify(characterFound))
    }

    else {
        response.writeHead(404, {"Content-type":"text/html"});
        response.end('<h1 style="text-align:center; color:#ff0000ff">Page not found</h1>')
    }

}).listen(3001, console.log("Puerto escuchado en el 3001"))