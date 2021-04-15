console.log('Promesas')

const retardo = (ms, mensaje) => new Promise(resolve => setTimeout(resolve, ms, mensaje))

/* console.log('inicio retardo 2 seg')
retardo(2000, 'fin retardo 2 seg')
.then(console.log) // .then(mensaje => console.log(mensaje))

console.log('inicio retardo 4 seg')
retardo(4000, 'fin retardo 4 seg')
.then(console.log) // .then(mensaje => console.log(mensaje))

console.log('inicio retardo 6 seg')
retardo(6000, 'fin retardo 6 seg')
.then(console.log) // .then(mensaje => console.log(mensaje)) */

const retardos = async() => {
    try{
        console.log(await retardo(2000, 'fin retardo 2 seg'))
        console.log(await retardo(4000, 'fin retardo 4 seg'))
        console.log(await retardo(6000, 'fin retardo 6 seg'))
    } catch(error) {
        console.log('error', error)
    }
}

/* console.log('inicio de los retardos')
retardos() */
/* console.log(new Date().toLocaleString())
Promise.race([
    retardo(6000, 'fin retardo a 6 seg'),
    retardo(8000, 'fin retardo a 8seg'),
    retardo(4000, 'fin retardo a 4 seg')
])
.then(rta => console.log(rta, new Date().toLocaleString()))
.catch(console.log) */

console.log(new Date().toLocaleString())
Promise.all([
    retardo(6000, 'fin retardo a 6 seg'),
    retardo(8000, 'fin retardo a 8seg'),
    retardo(4000, 'fin retardo a 4 seg')
])
.then(rta => console.log(rta, new Date().toLocaleString()))
.catch(console.log)