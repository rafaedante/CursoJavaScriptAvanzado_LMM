console.log('Ajax Anidado')

const url = 'https://5cfdb2b8ca949b00148d38ba.mockapi.io/noticias/'

//---------------------------------------------------
//Peticion asincronica por Ajax No anidado (desorden)
//----------------------------------------------------

function getNoticia(id) {
    let xhr = new XMLHttpRequest
    xhr.open('get', url+id)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log(respuesta)
        }
    })
    xhr.send()
}

/* console.log('inicio de peticiones')
getNoticia(1)
getNoticia(2)
getNoticia(3)
getNoticia(4)
getNoticia(5)
getNoticia(6)
getNoticia(7)
getNoticia(8)
getNoticia(9)
getNoticia(10)
console.log('otras tareas.....') */

//---------------------------------------------------
//Peticion asincronica por Ajax anidado (orden)
//----------------------------------------------------
function getNoticiaCb(id, cb) {
    let xhr = new XMLHttpRequest
    xhr.open('get', url+id)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log(respuesta)
            if(cb) cb(respuesta)
        }
    })
    xhr.send()
}

//Infierno de callbacks, callback hell, piramide de la perdicion
/* 
console.log('inicio de peticiones')
getNoticiaCb(1, () => {
    getNoticiaCb(2, () => {
        getNoticiaCb(3, () => {
            getNoticiaCb(4, () => {
                getNoticiaCb(5, () => {
                    getNoticiaCb(6, () => {
                        getNoticiaCb(7, () => {
                            getNoticiaCb(8, () => {
                                getNoticiaCb(9, () => {
                                    getNoticiaCb(10, () => {

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
console.log('otras tareas.....') */
//-----------------------------------------------------------
//Peticion asincronica por Ajax anidado usando Promise (orden)
//-----------------------------------------------------------
function getNoticiaPromise(id, debug){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest
        xhr.open('get', url+id)
        xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
                let respuesta = JSON.parse(xhr.response)
                if(debug) console.log(respuesta)
                resolve(respuesta)
            }
            else {
                let error = {
                    type: 'Error status',
                    code: xhr.status
                }
                reject(error)
            }
        })
        xhr.addEventListener('error', e => {
            let error = {
                type: 'Error Ajax',
                code: e
            }
            reject(error)
        })
        xhr.send()
    })
}

/* function getNoticias() {
    getNoticiaPromise(1, true)
    .then(() => getNoticiaPromise(2, true))
    .then(() => getNoticiaPromise(3, true))
    .then(() => getNoticiaPromise(4, true))
    .then(() => getNoticiaPromise(5, true))
    .then(() => getNoticiaPromise(6, true))
    .then(() => getNoticiaPromise(7, true))
    .then(() => getNoticiaPromise(8, true))
    .then(() => getNoticiaPromise(9, true))
    .then(() => getNoticiaPromise(10, true))
    .then(() => {})
    .catch(error => console.log('Error Promise!!!', error))
} 

getNoticias()
*/


//--------------------------------------------------------------
// Consumiendo Promesas mediante async await
//--------------------------------------------------------------

/* async function getNoticias() {
    try {
        await getNoticiaPromise(1, true)
        await getNoticiaPromise(2, true)
        await getNoticiaPromise(3, true)
        await getNoticiaPromise(4, true)
        await getNoticiaPromise(5, true)
        await getNoticiaPromise(6, true)
        await getNoticiaPromise(7, true)
        await getNoticiaPromise(8, true)
        await getNoticiaPromise(9, true)
        await getNoticiaPromise(10, true)
    }
    catch(error) {
        console.log('Error Promise!!!', error)
    }

} */

/* async function getNoticias() {
    try {

        let respuestas = await getNoticiaPromise('')
        //console.log(respuestas)

        for(let i=1; i<=respuestas.length; i++) {
            //let respuesta = await getNoticiaPromise((i!=5)?i:555)
            let respuesta = await getNoticiaPromise(i)
            console.log(respuesta)
        }
    } 
    catch(error) {
        console.log('Error Promise!!!', error)
    }
} */

//------------------------------------------------
//Consumiendo promesas mediante then-catch con fetch
//------------------------------------------------

function getNoticiaFetch(id, debug) {
   return fetch(url+id)
  .then(respuesta => respuesta.json())
  .then(noticia => {
      if(debug) console.log(noticia)
      return noticia
  })
}

function getNoticias() {
    getNoticiaFetch(1, true)
    .then(() => getNoticiaFetch(2,true))
    .then(() => getNoticiaFetch(3,true))
    .then(() => getNoticiaFetch(4,true))
    .then(() => getNoticiaFetch(5,true))
    .then(() => getNoticiaFetch(6,true))
}



console.log('inicio de peticiones')
getNoticias()
console.log('otras tareas.....')