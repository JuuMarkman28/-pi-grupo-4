let buscar = document.querySelector("#buscar")
let formulario = document.querySelector(".formularionav") 

formulario.addEventListener("submit", function (e) {
    e.preventDefault()

    let longitudBuscar = buscar.value.length

    if (longitudBuscar >= 3) {
        formulario.submit()
    } else if (longitudBuscar == 0) {
        alert("Rellenar el campo de busqueda")
    } else if (longitudBuscar > 0 && longitudBuscar <3){
         alert("Ingrese por lo menos tres caractéres")
}
})