let URL1 = "https://dummyjson.com/products/category/smartphones";

let seccion1 = document.querySelector(".seccion_productos1");

fetch(URL1)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    

    let contenido = ""

    for (i = 0; i < 10; i++) {
        const element = data.products[i]
        

        contenido += `<article class="article_productos">
                    <h4>${element.title}</h4>
                    <img src="${element.images[0]}" alt="sabanas">
                    <p class="descrip_prod">${element.description}</p>
                    <p class="precio">$ ${element.price}</p>
                    <a class="verDetalle" href="./product.html?idProduct=${element.id}">Ver detalle</a>
                </article>`
    }

    seccion1.innerHTML = contenido

    
})
.catch(function (error) {
    console.log("Error: " + error);
})



let URL2 = "https://dummyjson.com/products/category/groceries"

let seccion2 = document.querySelector(".seccion_productos2")

fetch(URL2)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data);
    
    let contenido = ""

    for (i = 0; i < 10; i++) {
        const element = data.products[i]        
        
        contenido += `<article class="article_productos">
                    <h4>${element.title}</h4>
                    <img src="${element.images[0]}" alt="sabanas">
                    <p class="descrip_prod">${element.description}</p>
                    <p class="precio">$ ${element.price}</p>
                    <a class="verDetalle" href="./product.html">Ver detalle</a>
                </article>`
    }

    seccion2.innerHTML = contenido

    
})
.catch(function (error) {
    console.log("Error: " + error);
})










