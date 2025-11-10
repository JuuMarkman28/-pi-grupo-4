let qs = this.location.search

let qsObj = new URLSearchParams(qs)

let Categoria = qsObj.get("NombreCategoria")

let URL = `https://dummyjson.com/products/category/${Categoria}`;


let seccion = document.querySelector(".seccion_gral_productos");


fetch(URL)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        let contenido = ""
        const element = data

        contenido += `<article class="titulo">
                <h2>${Categoria}</h2>
            </article>`

        for (i = 0; i < data.products.length; i++) {
            const element = data.products[i]
            

            contenido += `<article class="article_productos">
                    <h4>${element.title}</h4>
                    <img  src="${element.images[0]}" alt="galletitas">
                    <p class="descrip_prod">${element.description}</p>
                    <p class="precio">$ ${element.price}</p>
                    <a class="verDetalle" href="./product.html?idProduct=${element.id}">Ver detalle</a>
                </article>`
        }


        seccion.innerHTML = contenido



    })
    .catch(function (error) {
        console.log("Error: " + error);
    })






