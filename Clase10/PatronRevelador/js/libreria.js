const libreria = (function() {
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

    console.log('libreiria 1 instalada')

    //--------------------------------
    //  funciones publicas (wrapeadas)
    //------------------------------- 
    
    return {
        getClaveEncriptada: () => getClaveEncriptada(),
        firmarTexto: texto => firmarTexto(texto),
        getRandom: () => getRandom()
    }    

})()