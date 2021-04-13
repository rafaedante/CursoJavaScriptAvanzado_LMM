console.log('Ajax Externo')

function pruebaSerializacion() {
    let obj = {x:1}
    console.log(obj, typeof obj)

    //para enviarlo a un servidor lo serializo
    let objSerializado = JSON.stringify(obj)
    console.log(objSerializado, typeof objSerializado)

    //para recibirlo lo deserializamos
    let objDeserializado = JSON.parse(objSerializado)
    console.log(objDeserializado, typeof objDeserializado)
}

//pruebaSerializacion()

let url_nocors = 'https://jsonplaceholder.typicode.com/users'

//CORS: Cross Origin Resource Sharing
//JSONP: JSON Padding

let url_cors = 'https://en.wikipedia.org/w/api.php?action=query&meta=siteinfo&siprop=namespaces&format=json'

let url = url_cors

let xhr = new XMLHttpRequest
xhr.open('get', url)
xhr.addEventListener('load', () => {
    if(xhr.status == 200) {
        let respuesta = JSON.parse(xhr.response)
        console.log(respuesta)
    }
})
xhr.addEventListener('error', () => {
    console.log('Error Ajax!!!')

    let script = document.createElement('script')
    script.src = url + '&callback=micallback'
    document.body.appendChild(script)
})
xhr.send()

function micallback(res) {
    console.log(res)
}