console.log('Herencia en JS')



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