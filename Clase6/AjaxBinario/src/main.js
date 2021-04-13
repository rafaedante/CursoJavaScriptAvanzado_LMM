console.log('Ajax binario')

//let xhr
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

//cargarImagen('imagen1.jpg')


let form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()
    console.dir(form[0])

    //-----------------------------------
    //pedir multiples imagenes
    //-----------------------------------    
    /* let archivos = Array.from(form[0].files)
    console.log(archivos)
    archivos.forEach(archivo => {
        console.log(archivo)
        cargarImagen(archivo.name)
    }) */
    
    //-----------------------------------
    //pedir una sola imagen
    //-----------------------------------  
    let archivo = form[0].files[0].name
    //console.log(archivo)
    cargarImagen(archivo)
})