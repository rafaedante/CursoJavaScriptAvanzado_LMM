console.log('Patron Singleton');

(function() {
    "use strict"

    let instancia

    function App() {
        if(instancia == undefined) {
            this.id = Math.random()
            instancia = this
        } else {
            //console.log('info: no se permite generar mas de una instancia')
            //return instancia
            
            //throw Error('info: no se permite generar mas de una instancia')
            throw 'info: no se permite generar mas de una instancia'
        }        
    }

    window.app = App
})()

