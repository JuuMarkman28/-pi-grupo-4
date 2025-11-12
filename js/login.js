let mail = document.querySelector(".texto")
let contrasenia = document.querySelector(".textocontraseña") 
let texto = document.querySelector(".textooculto") 
let formulario = document.querySelector(".formularioLogin")

formulario.addEventListener("submit", function (e) {
    e.preventDefault()

    let longitudContrasenia = contrasenia.value.length
    let longitudMail = mail.value.length

    if (longitudMail == 0) {
        alert("Rellenar el campo de email, por favor")
        
    } else if (longitudContrasenia == 0) {
        alert("Rellenar el campo de contraseña, por favor")

    } else if ( 0 < longitudContrasenia && longitudContrasenia < 6){
         texto.innerText = "La contraseña debe tener al menos 6 caracteres"
         span.style.display = "block"
          
    } else if (longitudContrasenia > 6 && longitudMail != 0 && contrasenia != 0){
        formulario.submit()
          
}
})