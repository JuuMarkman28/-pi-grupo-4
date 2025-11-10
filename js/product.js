let qs = location.search

let qsObj = new URLSearchParams(qs)
console.log(qsObj)


let idBuscado = qsObj.get("idProduct")

let URL = `https://dummyjson.com/products/${idBuscado}`;


let seccion = document.querySelector(".seccion_cuerpo");


fetch(URL)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        let contenido = ""
        const element = data

        contenido += `<article class="titulo img_product">
                    <img class="img_detalle" src="${element.images[0]}" alt="galletitas">
                </article>


                <article class="art_subt">
                    <p class="subt_product">Marca: </p>
                    <p class="p_product">${element.brand}</p>
                </article>

                <article class="art_desc_product">
                    <p>${element.description}</p>
                </article>

                <article class="art_subt">
                    <p class="subt_product">Precio: </p>
                    <p class="p_product">$ ${element.price}</p>
                </article>

                <article class="art_subt">
                    <p class="subt_product">Categoria: </p>
                    <p class="p_product">${element.category}</p>
                </article>

                <article class="art_subt">
                    <p class="subt_product">Stock: </p>
                    <p class="p_product">${element.stock} unidades</p>
                </article>

                <article class="art_subt">
                    <p class="subt_product">Tags: </p>
                    <p class="p_product">${element.tags}</p>
                </article>`


        seccion.innerHTML += contenido

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })