let data = localStorage.getItem("data")

let dataObj = JSON.parse(data)

let saludo = document.querySelector(".saludo");

let lista = document.querySelector(".ul_header.ul_ir_form");

if (dataObj) {
  
  saludo.innerText = `Bienvenido: ${dataObj.email}`;
  
  lista.innerHTML = `<li class= "logout"><a href="./login.html">Logout</a></li>`;
  
  let logout = document.querySelector(".logout")
  
  logout.addEventListener("click", function(){
    
    localStorage.removeItem("data")

})

} 