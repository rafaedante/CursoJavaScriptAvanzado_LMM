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

        //barraNavegacionCargada_SinHistory()
        //barraNavegacionCargada_ConHistoryHash()
        barraNavegacionCargada_ConHistoryPush()
    }
})


function barraNavegacionCargada_SinHistory() {

    let main = document.querySelector('main')
    let links = document.querySelectorAll('a')
    console.log(links)

    links.forEach(link => {
        
        link.addEventListener('click', e => {
            e.preventDefault()

            let id = link.id            
            //console.log(id)
            let archivo = id + '.html'
            console.log(archivo)

            let xhr = ajax(archivo)
            xhr.addEventListener('load', () => {
                if(xhr.status == 200) {
                    main.innerHTML = xhr.response
                }
            })
        })
    })

    //Carga pagina inicial
    let archivo = 'home.html'
    let xhr = ajax(archivo)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            main.innerHTML = xhr.response
        }
    })

}

function barraNavegacionCargada_ConHistoryHash() {

    let main = document.querySelector('main')
    let links = document.querySelectorAll('a')    

    links.forEach(link => {
        
        link.addEventListener('click', e => {
            e.preventDefault()

            let id = link.id            
            location.hash = id
        })
    })

    window.addEventListener('hashchange', () => {
        console.log('cambio la url')

        let hash = location.hash
        console.log(hash)
        let archivo = hash.slice(1) + '.html'
        console.log(archivo)

        let xhr = ajax(archivo)
        xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
                main.innerHTML = xhr.response
            }
        })
    })

    //Carga pagina inicial
    let hash = location.hash
    let archivo = hash? (hash.slice(1) + '.html') : 'home.html'
    let xhr = ajax(archivo)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            main.innerHTML = xhr.response
        }
    })

}

function barraNavegacionCargada_ConHistoryPush() {

    let main = document.querySelector('main')
    let links = document.querySelectorAll('a')    

    links.forEach(link => {
        
        link.addEventListener('click', e => {
            e.preventDefault()

            let id = link.id            
            history.pushState(null,'',id)
            
            let archivo = id + '.html'       

            let xhr = ajax(archivo)
            xhr.addEventListener('load', () => {
                if(xhr.status == 200) {
                    main.innerHTML = xhr.response
                }
            })
        })
    })

    window.addEventListener('popstate', e => {
        console.log('cambio el historial')
        
        if(e.state.template) {
            main.innerHTML = xhr.response
        } else {
            let pathname = location.pathname
            let archivo = pathname.slice(1) + '.html'

            let xhr = ajax(archivo)
            xhr.addEventListener('load', () => {
                if(xhr.status == 200) {
                    main.innerHTML = xhr.response
                }
            })

        }           
        
    })

    //Carga pagina inicial
    let hash = null
    let archivo = hash? (hash.slice(1) + '.html') : 'home.html'
    let xhr = ajax(archivo)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            main.innerHTML = xhr.response
        }
    })

}