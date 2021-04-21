console.log('Patron Publicacion Subscripcion (Pub/Sub)')

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
orden.enviar()
