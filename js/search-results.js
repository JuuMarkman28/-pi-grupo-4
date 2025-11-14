let qs = location.search
let qsObj = new URLSearchParams(qs)

let idBuscado = qsObj.get("buscar")
let palabraBuscadoForm = qsObj.get("buscar")
let seccion = document.querySelector(".seccion-cuerpo");

let URL = `https://dummyjson.com/products/?name=${palabraBuscadoForm}`;

fetch(URL)

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {

        let contenido = ""
    
        if (data.products.length >= 1) {
            for (let i = 0; i < data.products.length; i++) {
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
        } else {
            
            contenido += `
        <article>
            <p>No hay resultados para el término: ${palabraBuscadoForm}</p>
        </article>`
        }
    })

    .catch(function (error) {
        
        console.log("Error: " + error)
    })