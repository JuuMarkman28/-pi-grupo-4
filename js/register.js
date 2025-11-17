let mail = document.querySelector(".textoregister")
let contrasenia = document.querySelector(".textocontraseña")
let texto_oculto = document.querySelector(".textooculto")
let texto_oculto2 = document.querySelector(".textooculto2")
let formulario = document.querySelector(".formularioRegistro")
let contrasenia2 = document.querySelector(".textocontraseña2")
let terminos = document.querySelector(".terminos")

formulario.addEventListener("submit", function (e) {
    e.preventDefault()

    let longitudContrasenia = contrasenia.value.length
    let longitudMail = mail.value.length
    let condicion = terminos.value

    if (longitudMail == 0) {
        alert("Rellenar el campo de email, por favor")

    } else {
        if (longitudContrasenia == 0) {
            alert("Rellenar el campo de contraseña, por favor")

        } else if (0 < longitudContrasenia && longitudContrasenia < 6) {
            
            texto_oculto.style.display = "block"

        } else if (contrasenia.value !== contrasenia2.value) {
            texto_oculto.style.display = "none"
            texto_oculto2.style.display = "block"

        } else { 
            formulario.submit()
        }
    }


})
