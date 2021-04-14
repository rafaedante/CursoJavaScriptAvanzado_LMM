console.log('Drag And Drop')

let drop = document.getElementById('drop')

drop.addEventListener('dragenter', e => {
    e.preventDefault()
    console.log('Estoy adentro del DROP')
})

drop.addEventListener('dragleave', e => {
    e.preventDefault()
    console.log('Estoy afuera del DROP')
})

drop.addEventListener('dragover', e => {
    e.preventDefault()
    console.log('Estoy encima del DROP')
})

drop.addEventListener('drop', e => {
    e.preventDefault()
    console.log('solte el recurso')
    console.log(e.dataTransfer.files)

    //pedir multiples imagenes
    let archivos = Array.from(e.dataTransfer.files)
    archivos.forEach(archivo => {
        //console.log(archivo)
        cargarImagen(archivo.name) 
    })

    //pedir una imagen
    /*let archivo = e.dataTransfer.files[0].name
    cargarImagen(archivo) */
})

/* let input = document.querySelector('input')
input.addEventListener('change', () => {
    console.log(input.files)

     //pedir multiples imagenes
    let archivos = Array.from(input.files)
    archivos.forEach(archivo => {
        console.log(archivo)
        cargarImagen(archivo.name) 
    }) */


     //pedir una imagen
    /*  let archivo = input.files[0].name
     cargarImagen(archivo)  
})
*/

function cargarImagen(archivo) {
    
    let progress = document.querySelector('progress')
    let span = document.querySelector('span')
    let img = document.querySelector('img')

    progress.value = 0
    span.innerText = '0%'
    img.src = ''

    let xhr = new XMLHttpRequest
    let urlSinCache = archivo + '?' + Date.now()
    console.log(urlSinCache)

    xhr.open('get', urlSinCache)
    xhr.responseType = 'blob'
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let imagenBlob = xhr.response
            //console.log(imagenBlob)

            let url = URL.createObjectURL(imagenBlob)
            //console.log(url)

           /*  let img = document.createElement('img')
            img.src = url
            document.body.appendChild(img) */            
            img.src = url
        }
    })

    xhr.addEventListener('progress', e => {
        //console.log('descargando......')
        console.log(e)

        if(e.lengthComputable) {
            let porcentaje = parseInt((e.loaded * 100) / e.total)
            console.log(porcentaje + '%')
            progress.value = porcentaje
            span.innerText = porcentaje + '%'
        }
    })

    xhr.send()
}