let data = sessionStorage.getItem("data")

let dataObj = JSON.parse(data)

let saludo = document.querySelector(".saludo");

let lista = document.querySelector(".a_header");

if (dataObj) {
  
saludo.innerText = `Bienvenido: ${dataObj.email}`;

 
lista.innerHTML = `<li class= "logout"><a href="./login.html">Logout</a></li>`;

let logout = document.querySelector(".logout")
logout.addEventListener("click", function(){
    sessionStorage.removeItem("data")
})

} else {

  alert("No se pudo guardar los datos correctamente")

}