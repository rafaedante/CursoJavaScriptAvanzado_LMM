(function() {
    "use strict"

    //----------------------------
    //  variables privadas
    //----------------------------  

    var password = 'querty123'

    //----------------------------
    //  funciones privadas
    //----------------------------  

    function getClaveEncriptada() {
        return password.split('').reverse().join('')
    }

    function firmarTexto(texto) {
        return texto.toUpperCase()
    }

    function getRandom() {
        return parseInt(Math.random()*1000) + 1 // numeros aleatorios del 1 al 1000
    }

   /*  function wrapper(cb) {
        return cb
    } */

    const wrapper = cb => cb

    //----------------------------
    //  funciones publicas
    //---------------------------- 

    // -----------FORMA 1---------------
    
    /* window.libreria = wrapper(getClaveEncriptada)
    window.libreria2 = wrapper(firmarTexto)
    window.libreria3 = wrapper(getRandom) */

    // -----------FORMA 2---------------
    window.libreria = {
        getClaveEncriptada: () => getClaveEncriptada(),
        firmarTexto: texto => firmarTexto(texto),
        getRandom: () => getRandom()
    }

    console.log('libreiria 1 instalada')

})()