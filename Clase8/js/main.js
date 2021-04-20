console.log('Objetos JS')

//--------------------------------------------------------------
//Objetos: 3 formas de construccion
// 1) Forma literal
// 2) function create de Object
// 3) funciones constructoras (fabrica de objetos o operador new)
//---------------------------------------------------------------

// 1) Forma literal
let a = {nombre: 'Juan'}
console.log(a)
console.log(a.hasOwnProperty('nombre'))
console.log(a.hasOwnProperty('edad'))

//2) function create de Object
let prototipo1 = {
    saludo: function() {
        console.log('Hola')
    } 
}

let prototipo2 = {
    saludo: function() {
        console.log('Hola 2')
    } 
}

let b = Object.create(prototipo1)
b.mensaje = function() {
    console.log('mensaje 1')
}
b.saludo = function() {
    console.log('Hi!!!!!!!!!!')
}
console.log(b)
//------------------------------------
let c = Object.create(prototipo2)
console.log(c)
console.log(prototipo1.isPrototypeOf(c))
console.log(prototipo2.isPrototypeOf(c))
//------------------------------------

let d = Object.create(null)
console.log(d)
d.nombre = "Pedro"

//---------------------------------------------------------------------------
//Configuracion avanzada de las propiedades de un objeto usando Object.create
//---------------------------------------------------------------------------
let prototipo3 = Object.create({}, {
    saludo: {
        value: function() {
            console.log('Hola 3!!!')
        }    
    }
})

let e = Object.create(prototipo3, {
    x: {
        value: 1,
        writable: true,
        configurable: true,
        enumerable: true
    },
    y: {
        value: 2,
        writable: false,
        configurable: false,
        enumerable: true
    }
})

/* console.log(e)
console.log(e.x) */
//e.x = 11
//delete e.x

for(let key in e) {
    console.log(key)
}

//---------------------------------------------------------------
// 3) funciones constructoras (fabrica de objetos o operador new)
//---------------------------------------------------------------
function foo() {
    console.log('Soy foo')
}
foo.x = true
foo()
console.log(foo.x) // --> una funcion en JS es un objeto (__proto__)

//Caracteriztica 1: las funciones en JS son variadicas
function sumar(a, b) {
    return (a||0) + (b||0)
}

console.log(sumar(2,3))

//Caracteriztica 2: las funciones tienen ambito ambito o scope

let global = 2
function foo2(argumento) {
    var local2 = 10 // variable local2 pertenece al scope de foo2()
    console.log(global, local2, argumento)
}

function foo3() {
    var local3 = 100
    console.log(local3) //, local2) --> Error de scope de variable local2
}

foo2()
console.log(global)
//console.log(local)
//console.log(argumento)
foo3()

//Caracteriztica 3: las funciones tienen closure
function externa(x) {
    //console.log(x)
    //return x
    var z = 5
    return function interna(y) {
        console.log(y + x + z)
    }
}

//externa(50)
//console.log(x)
let resultado = externa(50)
console.log(resultado)
resultado(10)

console.log('----------------------------------------')

//Caracteriztica 4: las funciones tienen contexto (this)
function foo4() {
    console.log(this)
}

foo4()

var persona2 = {
    nombre: 'Juan',
    saludo: function() {
        console.log(this)
    }
}

persona2.saludo()

console.log('-------------Formas ejecucion---------------------------')

//Caracteriztica 5: funciones: formas de ejecucion
function ctx(a, b) {
    console.log(this, a, b)
}

ctx(5,6) // forma normal
ctx.apply({x:1}, [5,6]) // metodo apply
ctx.call({x:1},5,6) // metodo call

//---------------------------------------------------------------
// POO, OOP: aplicacion de funciones constructoras
//---------------------------------------------------------------

console.log('-------------POO-OOP---------------------------')
/*
var persona = {
    nombre: null,
    edad: null
}

var juan = persona
var ana = persona
*/

//SOLUCION: usar funciones
function persona(nombre, edad) {
    var p = {
        nombre: nombre,
        edad: edad
    }

    return p
}


var juan = persona('Juan', 24)
var ana = persona('Ana', 23)

//funcion constructora -> operador new (constructor de objetos)
function personaNew(nombre, edad) {
    //console.log(this)
    this.nombre = nombre
    this.edad = edad
}

var juanNew = new personaNew('JuanNew', 24)
var anaNew = new personaNew('Ana', 22)

/*
new: genera las siguientes acciones:
a- crea un objeto vacio -> p = {}
b- va a ejecutar la funcion personaNew, redifinendo su contexto(this) al del objeto creado p
c- retorna ese objeto p
*/