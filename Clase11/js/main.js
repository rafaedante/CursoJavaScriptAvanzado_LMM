console.log('Persistencia')

//var a = 1
var a = Number(localStorage.getItem('a')) || 1

function cambiar(val) {
    a = val
    localStorage.setItem('a', val)
}

console.log(localStorage)

/*
localStorage.setItem('usuario', 'juan')
localStorage.setItem('numero', 3)
localStorage.setItem('boolean', true)
localStorage.setItem('objeto', JSON.stringify({x:1}))

console.log(localStorage.getItem('usuario'))
console.log(JSON.parse(localStorage.getItem('numero')))
console.log(JSON.parse(localStorage.getItem('boolean')))
console.log(JSON.parse(localStorage.getItem('objeto')))
*/

function representarStorage(storage) {
    for(let i=0; i<storage.length; i++){
        let clave = storage.key(i)
        try {
            valor = JSON.parse(storage.getItem(clave))
        } catch {
            valor = storage.getItem(clave)
        }
        
        console.log(i, ':',clave, '->', valor)
    }
}

//representarStorage(localStorage)

//--------------------------------------
// SESSION STORAGE
//--------------------------------------

sessionStorage.setItem('usuario', 'juan')
sessionStorage.setItem('numero', 3)
sessionStorage.setItem('boolean', true)
sessionStorage.setItem('objeto', JSON.stringify({x:1}))

representarStorage(sessionStorage)

//--------------------------------------
// COOKIES
//--------------------------------------

console.log(document.cookie)

//--------------------------------------
// CHROME DEV TOOLS
//--------------------------------------

console.log(performance.timing.connectEnd)

//--------------------------------------
// Medicion de tiempos de proceso
//--------------------------------------
//1) con new Date()

let tiempoInicial = new Date()
for(var i=0; i<1e8; i++); // proceso a medir
let tiempoFinal = new Date()
let tiempoTranscurrido = tiempoFinal - tiempoInicial
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} ms` )

//2) con console.time
console.time('retardo del proceso 1')
for(var i=0; i<1e8; i++); // proceso a medir
console.timeEnd('retardo del proceso 1')