console.log('Clase 1 - Java Script')
/* 
//var numero = 5
numero = 6

//for(var i=0; i<5; i++) {
for(let i=0; i<5; i++) {
    console.log(i)
}

//console.log(i) (error)

//bloque de codigo anonimo
{
    var a = 6
    console.log(a)
}
console.log(a)

//bloque de codigo condicional
if(true){
    var b = 7
    console.log(b)
}
console.log(b)

//bloque de codigo funcional
function foo() {
    var c = 8
    console.log(c)
}

foo()
//console.log(c) -> error */

console.log('---------------Let----------------------')
//bloque de codigo anonimo
{
    let a = 6
    console.log(a)
}
//console.log(a)

//bloque de codigo condicional
if(true){
    let b = 7
    console.log(b)
}
//console.log(b)

//--------------------------------------------------------------------------
// nuevos constructores de funciones en ES6
//(arrow function, funciones flecha o expresiones lambda)
//--------------------------------------------------------------------------

/* function sumar(a,b) {
    return a + b
} */

/* const sumar = function(a,b) {
    return a + b
} */

const sumar = (a,b) => a + b
const sumar2 = (a,b) => {
    let c = a + b
    console.log(c)
}

const dobleDe = a => a*2

const saludo = () => {
    console.log('Hola!!!!!!!!!!!!!!')
}

const getPersona = () => ({nombre: 'Juan', edad: 32})

let op1=6, op2=8
let suma = sumar(op1,op2)
//console.log('La suma de ' + op1 + ' mas ' + op2 + ' es: ' + suma)
console.log(`la suma de ${op1} mas ${op2} es ${suma}`)

sumar2(op1,op2)

console.log(`El doble de ${op1} es ${dobleDe(op1)}`) // template string (ES6)

saludo()
console.log(getPersona())

//-------------------------------------
// Variables y tipos de datos
//-------------------------------------
//1) Tipos primitivos (number, boolean, string, undefined, null) -> Copia x Valor
//2) Tipo objeto (array, object, function) -> Copia x referencia

/* var de = '67'
console.log(typeof(de)) */

//1)
//tipo number
var an = 1
var bn = an
an = 10
console.log(an)
console.log(bn)

//tipo boolean
var ab = true
var bb = ab
ab = false
console.log(ab)
console.log(bb)

//tipo string
var as = 'Hola'
var bs = as
as = 'Mundo'
console.log(as)
console.log(bs)

//2)
//tipo array
var aa = [1,2,3]
var ba = aa
aa[0] = 11
console.log(aa)
console.log(ba)

//tipo objeto
var ao = {x:1}
var bo = ao
ao.x = 11
console.log(ao)
console.log(bo)

//1) tipo primitivo - Modificacion de parametro desde una funcion
var fecha = '30/03/2021'

function agregarHoraAFecha(f) {
    f = f + ' 21:10:00'
    console.log(f)
}

console.log(fecha)
agregarHoraAFecha(fecha)
console.log(fecha)

//2) tipo objeto - Modificacion de parametro desde una funcion
var fechaObj = {f:'30/03/2021', usuario: 'Juan'}

function agregarHoraAFechaObj(fobj) {
    fobj['f'] = fobj['f'] + ' 21:15:00'  // notacion corchete
   // fobj.f = fobj.f + ' 21:15:00'         -> notacion punto
    console.log(fobj)
}

console.log(fechaObj)
agregarHoraAFechaObj(fechaObj)
console.log(fechaObj)

//--------------------------------------------------------------------------
// BOM (Browser Object Model): window y DOM (Document Object Model): document
//--------------------------------------------------------------------------

//Acceso al BOM
console.log('h', innerHeight)
console.log('w', innerWidth)

//Acceso al DOM
console.log(window.document.getElementById('titulo'))
console.log(window.document.getElementsByTagName('h1')[0])
console.log(window.document.getElementsByClassName('titulo')[0])
//console.dir(window.document.getElementById('titulo'))

console.log(window.document.querySelector('#titulo'))
console.log(window.document.querySelector('.titulo'))
console.log(window.document.querySelector('h1'))

console.log(window.document.querySelectorAll('.titulo')[0])
console.log(window.document.querySelectorAll('h1')[1])

var titulo = window.document.getElementById('titulo')

//Acceso avanzado al DOM
var parrafo = document.createElement('p')
parrafo.innerText = 'Soy un parrafo!'

var body = document.getElementsByTagName('body')[0]
body.appendChild(parrafo)