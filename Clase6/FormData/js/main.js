console.log('Form Data')

function representarContenidoFormData(data) {
    let values = data.values()
    let keys = data.keys()

    do {
        let key = keys.next()
        let value = values.next()
        if(key.done || value.done) break
        console.log(key.value, '->', value.value)

    } while(true)
}

//1 - Utilizacion de formData con formularios
let form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()

    let data =  new FormData(form)
    representarContenidoFormData(data)
})

//2- Utilizacion de formData con datos cargados en forma manual
document.getElementById('btn-crear').addEventListener('click', () => {
    let data =  new FormData(form)
    for(let i=0; i<10; i++) {
        data.append(`Param-${i}`, i)
    } 
    representarContenidoFormData(data)
})


//Implementacion de formData con ajax
let archivos = [
    'archivo1.jpg',
    'archivo2.jpg',
    'archivo3.jpg',
    'archivo4.jpg',
    'archivo5.jpg',
    'archivo6.jpg',
    'archivo7.jpg',
    'archivo8.jpg'
]

let data =  new FormData(form)
for(let i=0; i<archivos.length; i++) {
    data.append(`Imagen-${i}`, archivos[i])
} 
//representarContenidoFormData(data)

let xhr = new XMLHttpRequest
xhr.open('post', 'url')
//xhr.setRequestHeader('content-type', 'application/json')
xhr.send(data)