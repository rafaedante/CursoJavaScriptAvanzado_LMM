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

let e = Object.create(null, {
    x: {
        value: 1,
        writable: true,
        configurable: true,
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