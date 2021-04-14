console.log('Ajax Anidado')

const url = 'https://5cfdb2b8ca949b00148d38ba.mockapi.io/noticias/'

//---------------------------------------------------
//Peticion asincronica por Ajax No anidado (desorden)
//----------------------------------------------------
/* 
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

console.log('inicio de peticiones')
getNoticia(2)
getNoticia(3)
getNoticia(4)
getNoticia(7)
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