let qs = location.search
let qsObj = new URLSearchParams(qs)

let idBuscado = qsObj.get("buscar")
let palabraBuscadoForm = qsObj.get("buscar")
let seccion_productos = document.querySelector(".seccion_cuerpo_search")


let URL = `https://dummyjson.com/products/search?q=${palabraBuscadoForm}`;

fetch(URL)

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {

        let contenido = ""

        contenido += `<article class="titulo">
                <h2>Resultados de búsqueda para: ${palabraBuscadoForm}</h2>
            </article>`

        if (data.products.length >= 1) {
            for (i = 0; i < data.products.length; i++) {
                const element = data.products[i]
                contenido += `
                <article class="article_productos">
                    <h4>${element.title}</h4>
                    <img src="${element.images[0]}" alt="">
                    <p class="descrip_prod">${element.description}</p>
                    <p class="precio">$ ${element.price}</p>
                    <a class="verDetalle" href="./product.html?idProduct=${element.id}">Ver detalle</a>
                </article>`

            }



            seccion_productos.innerHTML = contenido

        } else {
            seccion_productos.innerHTML = `<article class="titulo">
                <h2>No hay resultados para el término: ${palabraBuscadoForm}</h2>
            </article>`

        }

    })

    .catch(function (error) {
        console.log("Error: " + error)
    })