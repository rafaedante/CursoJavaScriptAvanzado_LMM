console.log('Formularios en JS')

//----------------------------------------------------------------
// El evento submit y la cancelacion del evento automatico del form
//----------------------------------------------------------------

//let form = document.getElementById('formulario')
let form = document.querySelector('form')
let btn = document.getElementById('btn')
let input = document.querySelector('input')

/* btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('evento click')
}) */

/* form.addEventListener('submit', e => {
    e.preventDefault()
    console.log('evento submit')
}) */


//----------------------------------------------------------------
// Introduccion a la API Web HTMLElement
//----------------------------------------------------------------

/* form.addEventListener('submit', e => {
    e.preventDefault()
    console.log('evento submit')
}) */

//deshabilita el cartel automatico de validacion de html5 (problema con required )
/* let input = document.querySelector('input')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('evento click', 'validacion:', input.checkValidity())
}) */


//-------------------------------------------------------------------------
// Validacion customizada (sin required) manejando carteles validacion html5
//--------------------------------------------------------------------------

/* function validarInput(dato) {
    let longitud = dato.length 

    if(longitud < 3) {
        input.setCustomValidity('Este campo debe tener al menos 3 caracteres')
        return false
    }
    else if(longitud > 10) {
        input.setCustomValidity('Este campo debe tener maximo 10 caracteres')
        return false
    }
    else {
        input.setCustomValidity('')
        return true
    }
}

input.addEventListener('input', () => {
    let dato = input.value
    validarInput(dato)

    //console.log('dato desde input:', dato, 'longitud:', longitud)
})

form.addEventListener('submit', e => {
    e.preventDefault()
    let dato = input.value
    if(validarInput(dato)) {
        console.log('Dato valido', dato)
    } 



    //let longitud = dato.length 
    //console.log('dato desde submit:', dato, 'longitud:', longitud)
})*/



//-------------------------------------------------------------------------
// Validacion customizada (sin required) manejando carteles de JS5
//--------------------------------------------------------------------------
/* function JS5_SetCustomerValidity(mensaje) {
    let div = document.querySelector('div')
    div.innerHTML = mensaje
    div.style.display = mensaje!='' ? 'block':'none' // condicion? cond_verdadero:condic_falso
} */

input.setCustomerValidityJS5 = function(mensaje) {
    let div = document.querySelector('div')
    div.innerHTML = mensaje
    div.style.display = mensaje ? 'block':'none' 
}

function validarInput(dato) {
    let longitud = dato.length 

    if(longitud == 0) {
        //JS5_SetCustomerValidity('Este campo es obligatorio')
        input.setCustomerValidityJS5('Este campo es obligatorio')
        return null
    }
    else if(longitud < 3) {
        //JS5_SetCustomerValidity('Este campo debe tener al menos 3 caracteres')
        input.setCustomerValidityJS5('Este campo debe tener al menos 3 caracteres')
        return null
    }
    else if(longitud > 30) {
        //JS5_SetCustomerValidity('Este campo debe tener maximo 10 caracteres')
        input.setCustomerValidityJS5('Este campo debe tener maximo 10 caracteres')
        return null
    }
    else {
        //JS5_SetCustomerValidity('')
        input.setCustomerValidityJS5(null)
        //console.log('['+dato+']')

        dato = dato.trim()

        if(dato.indexOf(' ') >= 0) {
            input.setCustomerValidityJS5('no se permiten espacios intermedios en este campo')
            return null
        }

        //if(dato.indexOf('*') >= 0) {
        if(dato.includes('*')) {
            input.setCustomerValidityJS5('no se permiten asteriscos intermedios en este campo')
            return null
        }

        //se requiere un punto como maximo en el campo
        let cantPuntos = 0
        for(let i=0; i<dato.length; i++){
            if(dato[i] == '.') cantPuntos++
        }
        if(cantPuntos > 1) {
            input.setCustomerValidityJS5('se requiere un punto como maximo en este campo')
            return null
        }
        else if(cantPuntos == 0) {
            input.setCustomerValidityJS5('se requiere al menos un punto en este campo')
            return null
        }

        dato = encodeURIComponent(dato)

        return dato
    }
}

input.addEventListener('input', () => {
    //let dato = input.value
    validarInput(input.value)

    //console.log('dato desde input:', dato, 'longitud:', longitud)
})

form.addEventListener('submit', e => {
    e.preventDefault()
    let dato = validarInput(input.value)
    if(dato) {
        console.log('Dato valido', '['+dato+']')
    }
})


//-------------------------------------------------------------------------
// Expresiones regulares
//--------------------------------------------------------------------------
let miMensaje = 'Hole bc'
let miRegExp = /e bc/
console.log(miRegExp.test(miMensaje))