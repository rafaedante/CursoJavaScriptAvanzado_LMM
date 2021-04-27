
/* var a = 15
var b = 9
var c = a + b
console.log(c) */

const PORT = 8080
const NUM_SVR = 10
for(let i=1; i<=NUM_SVR; i++) {
    require('http').createServer((req, res) => res.end(`Servidor en ${PORT + i}`)).listen(PORT+i, () => console.log(`Srv listen ${PORT+i}`))
}


const http = require('http')
const fs = require('fs')

let contadorVisitas = 0
const server = http.createServer((req, res) => {
    //console.log(req)
    let url = req.url
    let metodo = req.method
    console.log(url, metodo)

    if(url == '/') {
         //res.write('Hola node.js server')
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(`<h2 style="color:magenta">Hola node.js server: <span style="color:blue;">${PORT}</span></h2>`)
        res.write(`<h3 style="color:green">Contador de Visitas: ${++contadorVisitas}</h3>`)
        res.end(`<p style="color:white; background-color:black;">FyH: ${new Date().toLocaleString()}</p>`)
    }
    else if(url == '/page'){
        //let webpage = fs.readFileSync('index.html', 'utf-8') // leo el archivo en forma bloqueante
        console.log(fs.readFileSync('index.html', 'utf-8'))
        fs.readFile('index.html', 'utf-8', (err, webpage) => { //leo el arch en forma no bloqueante
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(webpage)
        })
        
    }
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.end(`<h2 style="color:red;">Ruta <span style="color:orange;">${url} </span>no implementada</h2>`)
    }
   
})

server.listen(PORT, err => {
    if(err) return console.log(`Error en servidor ${err}`)
    console.log(`servidor node.js escuchando en el puerto ${PORT}`)
})

