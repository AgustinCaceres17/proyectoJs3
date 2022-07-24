let numero = parseInt(prompt("ingrese un numero entero"));

let resultado = parImpar(numero);

alert("El Numero " + numero + " es " + resultado);

function parImpar(numero){
    if(numero % 2 == 0){
        return "par ";
    }
    else{
        return "impar ";
    }
}

document.write(resultado)