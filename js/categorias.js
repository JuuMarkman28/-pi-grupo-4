let URL_Cat = "https://dummyjson.com/products/category-list";


let ul_cat = document.querySelector(".ul_categorias");

fetch(URL_Cat)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        let contenido = ""

        for (i = 0; i < data.length; i++) {
            const element = data[i]

            contenido += `<li class="li_aside"><a class="a_aside" href="./category.html?NombreCategoria=${element}">${element}</a></li>`
        }

        ul_cat.innerHTML = contenido


    })
    .catch(function (error) {
        console.log("Error: " + error);
    })