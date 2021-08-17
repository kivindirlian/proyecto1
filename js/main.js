let nombres = document.getElementById("nombre");

let nombre1 = prompt("cual es tu nombre");

let texto = `Bienvenido ${nombre1} a mi pagina web`

nombres.innerHTML = texto;
nombres.textContent = texto;


// nombre.innerHTML = ("Bienvenido/a " + nombre1  + " a mi pagina web")
