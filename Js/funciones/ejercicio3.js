function sumarLados(ladoA,ladoB){

    let perimetro = (2*(ladoA+ladoB));
    
    document.write("el perimetro del rectangulo es " + perimetro)
}

let ladoA = parseInt(prompt("ingrese el numero del lado A"))
console.log(ladoA)

let ladoB = parseInt(prompt("ingrese el numero del lado B"))
console.log(ladoB)

sumarLados(ladoA,ladoB);