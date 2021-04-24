console.log('Patron Publicacion Subscripcion (Pub/Sub)')
/*
//------------------------
//Obj Mailer
//------------------------
var Mailer = function() {}
Mailer.prototype = {
    enviarMailDeCompra: function(mail) {
        console.log('Enviando mail.....')
        setTimeout(() => {
            console.log('Email enviado a ' + mail)
        }, 2500)
    }
}

//------------------------
//Obj Orden
//------------------------
var Orden = function(mail) {
    this.mail = mail
}

Orden.prototype = {
    enviar: function() {
        console.log('orden guardada')
        this.enviarMail(this.mail)
    },
    enviarMail: function(mail) {
        //Fuerte acoplamiento entre mailer y orden
        var mailer = new Mailer()
        mailer.enviarMailDeCompra(mail)
    }
}

//------------------------
//Accion
//------------------------
var orden = new Orden('juan@gmail.com')
//orden.enviar()
*/

//--------------------------------------------------
//BUS DE COMUNICACION ENTRE OBJETOS (Patron Pub Sub)
//--------------------------------------------------
/*
var BusComunicacion = {
    acciones: {},
    subcribir: function(servicio, cb) {
        if(!this.acciones[servicio]) this.acciones[servicio] = []
        this.acciones[servicio].push(cb)
        console.log(`Servicio: ${servicio} CON UNA NUEVA SUSCRIPCION`)
    },
    publicar: function(servicio, datos) {
        if(!this.acciones[servicio] || this.acciones[servicio].length < 1) {
            console.log(`En este servicio: ${servicio} NO HAY SUSCRIPTORES (publicar)`)
            return
        }

        this.acciones[servicio].forEach(function(cb) {
            if(cb) cb(datos || {})
        })
    },
    desuscribir: function(servicio) {
        if(!this.acciones[servicio] || this.acciones[servicio].length < 1) {
            console.log(`En este servicio: ${servicio} NO HAY SUSCRIPTORES (desuscribir)`)
            return
        }
        this.acciones[servicio] = []
        console.log(`Servicio: ${servicio} DESUSCRIPTO`)
    }
}
*/
//---------------------------------------------------------------------------
//Utilizacion del patron pubSub Diario del domingo
//-------------------------------------------------------------------------

//Prueba del bus de comunicacion Patron Pub/Sub
/* BusComunicacion.subcribir('Diario del Domingo', datos => console.log(datos))
BusComunicacion.subcribir('Diario del Domingo', datos => alert(datos))
let refTimer = setInterval(() => {
    BusComunicacion.publicar('Diario del Domingo', 'LLego el diario')
}, 3000)
setTimeout(() => {
    BusComunicacion.desuscribir('Diario del Domingo')
    clearInterval(refTimer)
}, 20000) */

//---------------------------------------------------------------------------
//Utilizacion del patron pubSub para desacoplar los objetos Mailer Y Orden
//-------------------------------------------------------------------------

//------------------------
//Obj Mailer
//------------------------

/*
var Mailer = function() {
    //BusComunicacion.subcribir('orden', this.enviarMailDeCompra)
    BusComunicacion.subcribir('orden', mail => this.enviarMailDeCompra(mail))
    BusComunicacion.subcribir('orden', mail => console.log('Mail configurado' + mail))
    BusComunicacion.subcribir('orden', mail => setTimeout(() => alert('Proceso Finalzado:' + mail), 4000))
}
Mailer.prototype = {
    enviarMailDeCompra: function(mail) {
        console.log('Enviando mail.....')
        setTimeout(() => {
            console.log('Email enviado a ' + mail)
        }, 2500)
    }
}

//------------------------
//Obj Orden
//------------------------
var Orden = function(mail) {
    this.mail = mail
}

Orden.prototype = {
    enviar: function() {
        console.log('orden guardada')
        this.enviarMail(this.mail)
    },
    enviarMail: function(mail) {
        BusComunicacion.publicar('orden', mail)        
    }
}

//------------------------
//Accion
//------------------------
var mailer = new Mailer()
var orden = new Orden('juan@gmail.com')
//orden.enviar()

*/

//---------------------------------------
//      Observables
//---------------------------------------

//---------------------------
//   Funcion PASIVA (Pull)
//--------------------------
var contadorPull = 0
function contarPull() {
    return contadorPull++
}

/*
console.log(contarPull())
console.log(contarPull())
console.log(contarPull())
console.log(contarPull())
*/

//---------------------------
//   Funcion ACTIVAS (Push)
//--------------------------

const { Observable } = rxjs

function contarPush(nombreSuscriptor) {
    let contadorPush = 0
    return new Observable(suscriber => {
        setInterval(() => {
            suscriber.next(nombreSuscriptor + ': ' + (contadorPush++))
        },1000)        
    })
}

//contarPush().subscribe(dato => console.log(dato))

console.log('Suscripcion Juan al contador')
let contar1 = contarPush('Juan').subscribe(dato => console.log(dato))
setTimeout(() => {
    console.log('Desuscripcion Juan al contador')
    contar1.unsubscribe()
}, 10000)

let contar2
setTimeout(() => {
    console.log('Suscripcion Ana al contador')
    contar2 = contarPush('Ana').subscribe(dato => console.log(dato))
}, 5000)

setTimeout(() => {
    console.log('Desuscripcion Ana al contador')
    contar2.unsubscribe()
}, 15000)