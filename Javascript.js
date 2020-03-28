function calificacion() {
    let primerParcial = parseFloat(document.getElementById("p1").value);
    let segundoParcial = parseFloat(document.getElementById("p2").value);
    let tercerParcial = parseFloat(document.getElementById("p3").value);
    let examenFinal = parseFloat(document.getElementById("final").value);
    let finalWork = parseFloat(document.getElementById("workF").value);
    let resParcial = document.getElementById("prom");
    let notaFinal = document.getElementById("notaFinal");
    let nota;
    
    let promParcial = (primerParcial +  segundoParcial +  tercerParcial)/3;

    resParcial.innerHTML = "Promedio parciales: " + promParcial.toFixed (1);

    nota = (promParcial * 0.55) + (examenFinal * 0.3) + (finalWork * 0.15);

    notaFinal.innerHTML = "Su nota final es: " + nota.toFixed(1);
}

function numero_random() {
    let adivinar = 0
    let numeroRandom
    let numeroUsuario

     do {
        numeroRandom = Math.round(Math.random()*50)
        console.log(numeroRandom)
        numeroUsuario = prompt("Ingrese un número entre 1 y 50") 

        if (numeroUsuario == numeroRandom) {
            alert("Has adivinado")
            adivinar = 10      
        }

        else if (Math.abs(numeroUsuario-numeroRandom)<10 || Math.abs(numeroRandom-numeroUsuario)<10){
            alert("Estuviste cerca")
            adivinar = adivinar+1
        }

        else{
            alert("Sigue intentando")
            adivinar = adivinar+1
        }

    } while (adivinar<9);

     if (adivinar==9) {
        alert("Perdiste")
     } 
     adivinar = 0   
}

function parImpar() {
    let numerosArreglo = []
    let pares = 0
    let impares = 0
    let totalNumeros = prompt("Ingrese la cantidad de numeros deseados separados por comas")
    let parcial = document.getElementById("parcial")
    let porcentajePares = document.getElementById("resPar")
    let porcentajeImpares = document.getElementById("resImpar")

    numerosArreglo = totalNumeros.split(",")
    let conteo = numerosArreglo.length
    
    parcial.innerHTML = "los numeros elegidos son: " + numerosArreglo + "<br>" + "Cantidad de numeros: " + conteo
    
    for (let index = 0; index < numerosArreglo.length; index++) {
        if ((numerosArreglo[index]%2)==0) {
            pares = pares+1            
        }
        else{
            impares=impares+1
        }

        porcentajePares.innerHTML = "El porcentaje de números pares es " + Math.round(((pares * 100) / conteo)) + "%"
        porcentajeImpares.innerHTML = "El porcentaje de números impares es " + Math.round(((impares * 100) / conteo)) + "%"

    }
}

function imprimirNumeros() {

    let opcion = prompt("Elija la opcion a imprimir")
    let numeros = 0

    if (opcion == 1) {
        while (numeros<100) {
            numeros = numeros + 1
            console.log(numeros)          
        }
    }
    else if (opcion == 2){
        numeros = 100
        while (numeros<200) {
            numeros = numeros + 1
            console.log(numeros)
        }
    }
    else{
        alert("Esta no es una opcion válida")
    }
    
}

function esPalindromo() {
    let palabra = document.getElementById("word").value
    let arregloPalabra = palabra.split(" ")
    let palabraUnida = arregloPalabra.join("")
    let letrasSeparadas = palabraUnida.split("")
    let letrasReves = letrasSeparadas.reverse()
    let palabraReves = letrasReves.join("")
    let comprobacion = document.getElementById("test1")

    if (palabraUnida == palabraReves) {
        comprobacion.innerHTML = palabra + " es un palíndromo"      
    }
    else{
        comprobacion.innerHTML = palabra + " no es un palíndromo"
    }
}

function nombres() {
    let nombres, arreglo = [];

    do {
        nombres = prompt("Ingrese el nombre, para terminar ingrese solo un espacio en blanco")
        arreglo.push(nombres)
        for (let index = 0; index < arreglo.length; index++) {
            if (arreglo[index-1] == nombres) {
                alert("No debe repetir nombres")
                arreglo.pop()              
            }
        }
        console.log(arreglo)
        
    } while (nombres != " ");
    arreglo.pop()
    console.log(arreglo.sort())
}

function upsideDown() {
    let palabra = document.getElementById("word2").value
    let arregloPalabra = palabra.split("")
    let letrasReves = arregloPalabra.reverse()
    let palabraReves = letrasReves.join("")
    let letras = 0
    let espacios = 0
    let inversion = document.getElementById("test2")

    for (let index = 0; index < arregloPalabra.length; index++) {
        if (arregloPalabra[index]==" ") {
            espacios = espacios + 1            
        }
        else{
            letras = letras + 1
        }  
    }

    inversion.innerHTML = `${palabra}<br>tu palabra al revés es: ${palabraReves}<br>tiene ${letras} letras y ${espacios} espacios`
    
}