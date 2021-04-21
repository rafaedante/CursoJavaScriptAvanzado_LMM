"use strict"
console.log('Herencia en JS')

//----------------------------------------------------------
//"use strict": activa el modo estricto del compliador de JS
//----------------------------------------------------------
function foo() {
    var b = 8
    console.log(b)
}
foo()
//console.log(b)

//creacion de un objeto en forma literal
var a = {}
console.log(a)

//creacion de un objeto usando funciones constructoras y operador new
function Persona2(nombre, edad) {
    //propiedades de instancias(particulares a cada objeto creado)
    this.nombre = nombre
    this.edad = edad

    //para pedro y maria (con modificaciones particulares)
 /*    this.saludo = function() {
        console.log('Holaaa')
    } */
   
}

//propiedades de prototipo (generales para todos los objetos creados)
Persona2.prototype.x = true

let pedro = new Persona2('Pedro', 32)
let maria = new Persona2('Maria', 29)

//Persona2.prototype.edad = 25

//para pedro y maria (con modificaciones generales)
Persona2.prototype.saludo = function() {
    console.log('Holaaa')
}

/* pedro.saludo = function() {
    console.log('Holaaa')
} */

console.dir(Persona2)
console.log(pedro)
console.log(maria)




//---------------------------------------------------------
// Herencia en JS5 y ES6
//---------------------------------------------------------
// Extension del prototipo con un prototipo de orden superior (__proto__)
// Escalonamiento de prototipos

//Herencia en JS5, usando funciones constructoras

/*
//----------
//Persona
//----------
function Persona(nombre, edad) {   
    this.nombre = nombre
    this.edad = edad   
}

Persona.prototype.saludo = function() {
    console.log('Hola!!!')
}

let juan = new Persona('Juan', 23)

//----------
//Empleado
//----------
function Empleado(nombre, edad, sueldo) {
    this.sueldo = sueldo
    //--Composicion-----
    Persona.call(this, nombre, edad )
}

//---> Herencia
Empleado.prototype = Object.create(Persona.prototype)
Empleado.prototype.trabajar = function() {
    console.log('trabajando')
}

let empleado1 = new Empleado('Juan', 25, 30000)

*/

//Herencia en JS5, usando prototipos
var persona = {
    saludo: function() {
        console.log('Hola')
    }
}

var diego = Object.create(persona)
var ana = Object.create(persona)

// Prototipo sin herencia
/*
var empleado = {
    trabajar: function() {
        console.log('trabajando...')
    }
}
*/

// Prototipo con herencia
var empleado = Object.create(persona, {
    trabajar: {
        value : function() {
            console.log('trabajando...')
        },
        writable: true,
        enumerable: true,
        configurable: true
    }
})

var empleado2 = Object.create(empleado)

//---------------------------------------------------------
// Herencia en ES6 usando class para crear objetos
//---------------------------------------------------------

/* 
//----------
//Persona
//----------
class Persona {   
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad 
    }

    saludo() {
        console.log('Hola!!!')
    }   
}

let juan = new Persona('Juan', 23)

//----------
//Empleado
//----------
class Empleado extends Persona {
    constructor(nombre, edad, sueldo) {
        super(nombre, edad)
        this.sueldo = sueldo
    }

    trabajar() {
        console.log('trabajando.....')
    }
}

let empleado1 = new Empleado('Juan', 24, 30000) 
*/

//------------------------
//funciones class (ES6)
//-----------------------

class Persona {

}

console.dir(Persona)

//--------------------------------------------------------------------------
//Diferencias entre class y funciones constructoras (para construir objetos)
//-------------------------------------------------------------------------
class PersonaES6 {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
        PersonaES6.contador++
    }

    static contador = 0

    saludo() {
        console.log('Hola')
    }
}

let juanES6 = new PersonaES6('Juan', 24)
console.log(juanES6)


//Definicion de Persona en JS5

function PersonaJS5(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    PersonaJS5.contador++
}

PersonaJS5.prototype.saludo = function() {
    console.log('Hola!!!!')
}

PersonaJS5.contador = 0

let juanJS5 = new PersonaJS5('juan', 24)
console.log(juanJS5)


//------------------------------
//funciones Auto Invocadas (IIFE)
//------------------------------
// I : INMEDIATLY
// I: INVOKED
// F: FUNCTION
// E: EXPRESSION

/*
function programa() {
    var clave = 1234
}

programa()
console.log(clave)
*/
;
(function(num) {   
    var clave = 1234
    console.log(clave)
    console.log(num)
})(33)

//console.log(clave)
