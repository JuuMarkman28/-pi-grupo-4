let qs = location.search

let qsObj = new URLSearchParams(qs)

let idBuscado = qsObj.get("idProduct")

let URL = `https://dummyjson.com/products/${idBuscado}`;


let seccion = document.querySelector(".seccion_cuerpo");


fetch(URL)
.then(function(response) {
    return response.json()
})
.then(function(data) {

    let contenido = ""
    const element = data

    contenido += ``
        

    seccion.innerHTML = contenido



})
.catch(function(error) {
    console.log("Error: " + error);
})