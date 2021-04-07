console.log('Ajax- Asyncron Javascript And XML')

//-------------------------
// Codigo Sincronico
//-------------------------
/* console.log('inicio de tareas...')

console.log('tarea 1 - paso 1'); for(let i=0; i<3e9; i++);
console.log('tarea 1 - paso 2'); for(let i=0; i<3e9; i++);
console.log('tarea 1 - paso 3'); for(let i=0; i<3e9; i++);
console.log('tarea 1 - paso 4'); for(let i=0; i<3e9; i++);

console.log('tarea 2 - paso 1'); for(let i=0; i<3e9; i++);
console.log('tarea 2 - paso 2'); for(let i=0; i<3e9; i++);
console.log('tarea 2 - paso 3'); for(let i=0; i<3e9; i++);
console.log('tarea 2 - paso 4'); for(let i=0; i<3e9; i++);

console.log('otras tareas...') */

//-------------------------
// Codigo Asincronico
//-------------------------
/* console.log('inicio de tareas 1')
console.log('tarea 1 - paso 1')
setTimeout(() => {
    console.log('tarea 1 - paso 2')
    setTimeout(() => {
        console.log('tarea 1 - paso 3')
        setTimeout(() => {
            console.log('tarea 1 - paso 4')
        }, 1000)
    }, 1000)
}, 1000)

console.log('inicio de tareas 2')
console.log('tarea 2 - paso 1')
setTimeout(() => {
    console.log('tarea 2 - paso 2')
    setTimeout(() => {
        console.log('tarea 2 - paso 3')
        setTimeout(() => {
            console.log('tarea 2 - paso 4')
        }, 1500)
    }, 1500)
}, 1500)
console.log('otras tareas...') */

//---------------------------------
// Ajax- Asyncron Javascript And XML
//---------------------------------
let xhr = new XMLHttpRequest
console.log(xhr.readyState)


/*
ready state:
0 -> Instancia esta creada
1 -> Instancia esta configurada
2 -> Intercambio de header entre cliente y servidor
3 -> Transferencia de informacion
4 -> Fin de la comunicacion (ok o no ok)

state:
200 -> transferencia correcta
otros -> error
*/

/* xhr.addEventListener('readystatechange', () => {
    console.log('readystatechange', xhr.readyState)

    if(xhr.readyState == 2) {
        let headers = xhr.getAllResponseHeaders()
        //console.log(headers)
        let tipo = xhr.getResponseHeader('content-type')
        console.log(tipo)

        if(!tipo.includes('text/plain')) {
            xhr.abort()
        }
    }

    if(xhr.readyState == 4) {
        if(xhr.status == 200) {
            console.log('respuesta:', xhr.response)

        } else {
            console.log('Error! status:', xhr.status)
        }
    }
}) */

xhr.addEventListener('load', () => {
    if(xhr.status == 200) {
        console.log('respuesta:', xhr.response)

    } else {
        console.log('Error! status:', xhr.status)
    }
})

xhr.addEventListener('timeout', () => {
    console.log('El pedido se ha excedido de tiempo')
})

xhr.open('get', 'texto.txt')
//console.log(xhr.readyState)
xhr.timeout = 0 //1
xhr.send()
//console.log(xhr.readyState)
//console.log('respuesta:', xhr.response)

/* setTimeout(() => {
    console.log(xhr.readyState)
    console.log('respuesta:', xhr.response)
},500) */
