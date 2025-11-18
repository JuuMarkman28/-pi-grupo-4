let qs = location.search

let qsObj = new URLSearchParams(qs)

let idBuscado = qsObj.get("idProduct")

let URL = `https://dummyjson.com/products/${idBuscado}`;


let seccion1 = document.querySelector(".seccion_detalle");

let seccion2 = document.querySelector(".seccion_comentarios")


fetch(URL)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        let contenido1 = ""
        const element = data

        contenido1 += `<article class="titulo">
                    <h2>${element.title}</h2> 
                </article>

                <article class="titulo img_product">
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


        seccion1.innerHTML += contenido1

        let contenido2 = ""


        for (i = 0; i < data.reviews.length; i++) {
            const elemento2 = element.reviews[i]
            // linea 74 consultar con profes 
            // qué hacemos con las estrellas de los comentarios? if?

            let estrellitas = ""
            for (let i = 0; i < elemento2.rating; i++) {
                estrellitas += "⭐"
            }

            contenido2 += `<article class="art_comentarios">
                    <p>${estrellitas}</p>
                    <p>${elemento2.comment}</p>
                    <p>${elemento2.date}</p> 
                    <p>${elemento2.reviewerName}</p>
                </article>`
        }

        seccion2.innerHTML += contenido2


    })
    .catch(function (error) {
        console.log("Error: " + error);
    })