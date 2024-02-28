var contador = prompt("Ingresa el número de veces que quieres jugar: ");
var contador = parseInt(contador);

var tu_jugada = prompt("Ingresa tu jugada: ");
var pc_jugada = ["piedra", "papel", "tijera"];
var random_pc_jugada = pc_jugada[Math.floor(Math.random()* pc_jugada.length)];

var res = ""

switch (tu_jugada){
    case "piedra":
        if (random_pc_jugada == "piedra")
        {res = "Empate";}
        break;
    
    case "piedra":
        if (random_pc_jugada == "papel")
        {res = "Perdiste";}
        break;
    
    case "piedra":
        if (random_pc_jugada == "tijera")
        {res = "Ganaste";}
        break;
    
    case "papel":
        if (random_pc_jugada == "piedra")
        {res = "Ganaste";}
        break;
    
    case "papel":
        if (random_pc_jugada == "papel")
        {res = "Empate";}
        break;
    
    case "papel":
        if (random_pc_jugada == "tijera")
        {res = "Perdiste";}
        break;
    
    case "tijera":
        if (random_pc_jugada == "piedra")
        {res = "Perdiste";}
        break;
    
    case "tijera":
        if (random_pc_jugada == "papel")
        {res = "Ganaste";}
        break;
    
    case "tijera":
        if (random_pc_jugada == "tijera")
        {res = "Empate";}
        break;
}


    

// Mostrar resultado por cada  jugada:
document.write(`<span class='txt100'>El computador a jugado: ${random_pc_jugada}</span>`);
document.write("<br></br>")
document.write(`<span class='txt100'>${tu_jugada} VS ${random_pc_jugada}</span>`) 
document.write("<br></br>")
document.write(res)
