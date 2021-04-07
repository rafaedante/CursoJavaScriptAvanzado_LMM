console.log('SPA - Single Page Application')

function ajax(url, metodo) {
    let httpMetodo = metodo || 'get'
    let xhr = new XMLHttpRequest
    xhr.open(httpMetodo, url)
    xhr.send()

    return xhr
}

//inyeccion de la navbar (desde navbar.html) en el html principal
let nav = document.querySelector('nav')
let xhr = ajax('navbar.html')
xhr.addEventListener('load', () => {
    if(xhr.status == 200) {
        nav.innerHTML = xhr.response
    }
})