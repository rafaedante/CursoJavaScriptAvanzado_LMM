console.log('Eventos en JS')

var uno = () => {
    console.log('Soy la funcion 1')
}

var dos = () => {
    console.log('Soy la funcion 2')
}

uno()
dos()

function prueba(item, callback) {
    console.log(item)
    callback()
}

prueba(1, uno)
prueba(2, dos)

function prueba2(item, cb1, cb2) {
    console.log(item)
    cb1()
    cb2()
}

prueba2(3,uno,dos)

console.log('---------------------')

function operacion(a,b,cb) {
    return cb(a,b)
}

/* function suma(a,b) {
    return a + b
} */

var num1 = 4, num2 = 7

const suma = (a,b) => a + b
const resta = (a,b) => a - b
const mult = (a,b) => a * b
const div = (a,b) => a / b

console.log(`Dado los numeros ${num1} y ${num2}`)
console.log(`La suma es: ${operacion(num1,num2,suma)}`)
console.log(`La resta es: ${operacion(num1,num2,resta)}`)
console.log(`La multiplicacion es: ${operacion(num1,num2,mult)}`)
console.log(`La division es: ${operacion(num1,num2,div)}`)


//-------------------------------------------------
//  Eventos
//-------------------------------------------------
var btn = document.getElementById('btn')

function click() {
    console.log('click')
}

/* btn.onclick = () => {
    console.log('click')
} */

//btn.onclick = click

//btn.onclick = uno
//btn.onclick = dos

/* btn.onclick = () => {
    uno()
    dos()
} */

btn.addEventListener('click', uno)
btn.addEventListener('click', dos)
btn.addEventListener('click', function() {
    console.log('Soy otra funcion')
})

//-------------------------------------------------
//  Objeto Event
//-------------------------------------------------
btn.addEventListener('click', function(e) {
    console.log(e)
})

//-------------------------------------------------
//  Propagacion de eventos
//-------------------------------------------------
var UNO = document.getElementById('uno')
var DOS = document.getElementById('dos')
var TRES = document.getElementById('tres')

/* console.log(UNO)
console.log(DOS)
console.log(TRES) */

TRES.addEventListener('click', function(e) {
    console.log('click TRES')
})

DOS.addEventListener('click', function(e) {
    e.stopPropagation()
    console.log('click DOS')
})

UNO.addEventListener('click', function() {
    console.log('click UNO')
})


//-------------------------------------------------
// Aplicacion avanzada de propagacion de eventos
//-------------------------------------------------
var estatico = document.getElementById('estatico')
var botonCreado = false
estatico.addEventListener('click', function() {
    console.log('Soy el boton estatico')
    if(!botonCreado) {
        var dinamico = document.createElement('button')
        dinamico.innerText = 'dinamico'
        dinamico.id = 'dinamico'
        document.body.appendChild(dinamico)

       /*  var dinamico = document.getElementById('dinamico')
        dinamico.addEventListener('click', function() {
            console.log('soy el boton dinamico')
        }) */

        botonCreado = true
    }
   
})

document.addEventListener('click', function(e) {
    var id = e.target.id
    //console.log('id: ', id)

    if(id == 'dinamico') {
        console.log('soy el boton dinamico')
    }
})


//-------------------------------------------------
// Eventos con comportamiento automatico
//-------------------------------------------------
var link = document.getElementById('link')
link.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('Click en link!!!')
})


//-------------------------------------------------
// Manipulacion del DOM en un evento de BOM
//-------------------------------------------------
var info = document.getElementById('info-resize')
window.addEventListener('resize', () => {
    //console.log('Cambio el tamaño del navegador')
    info.innerText = `El tamaño externo del navegador es ${outerWidth} x ${outerHeight} pixeles.
    El tamaño interno del navegador es ${innerWidth} x ${innerHeight} pixeles.`
})


//-------------------------------------------------
// Eventos Custom
//-------------------------------------------------
//creamos el evento
var ev = new Event('look', {'bubbles': true, 'cancelable':false})

//escucho evento look
document.addEventListener('look', () => {
    console.log('evento look!!!!')
})

//ejecuto evento look
document.getElementById('btn-look').addEventListener('click', () => {
    document.dispatchEvent(ev)
})
