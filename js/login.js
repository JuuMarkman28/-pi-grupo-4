let mail = document.querySelector(".texto")
let contrasenia = document.querySelector(".textocontraseña")
let texto_oculto = document.querySelector(".textooculto")
let formulario = document.querySelector(".formularioLogin")

formulario.addEventListener("submit", function (e) {
    e.preventDefault()

    let longitudContrasenia = contrasenia.value.length
    let longitudMail = mail.value.length

    if (longitudMail == 0) {
        alert("Rellenar el campo de email, por favor")

    } else {
        if (longitudContrasenia == 0) {
            alert("Rellenar el campo de contraseña, por favor")

        } else if (longitudContrasenia >= 6){

            let userObj= {
                email: mail.value
            }

            let userString = JSON.stringify(userObj);

            localStorage.setItem("data", userString);

            formulario.submit()
        }
    }


})

formulario.addEventListener("input", function (e) {
    let longitudContrasenia = contrasenia.value.length

     if (0 < longitudContrasenia && longitudContrasenia < 6) {
            
            texto_oculto.style.display = "block"

        } else{
            texto_oculto.style.display = "none"
        }
})