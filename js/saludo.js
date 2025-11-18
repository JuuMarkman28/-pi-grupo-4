let data = localStorage.getItem("data")

let dataObj = JSON.parse(data)

let saludo = document.querySelector(".saludo");

let lista = document.querySelector(".ul_cambiada");

let oculta = document.querySelector(".ul_oculta")

if (dataObj) {
  oculta.style.display = "flex"
  
  saludo.innerText = `Bienvenido: ${dataObj.email}`;
  
  lista.innerHTML = `<li class= "logout"><a href="./login.html">Logout</a></li>`;
  
  
  

} 