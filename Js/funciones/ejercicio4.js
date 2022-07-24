function escribirTablaMultiplicar(numero){
	document.write("<ul>");

	for(i = 1;i<=10;i++){
		document.write("<li>");
		document.write(numero + " x " + i + "= " + numero * i);
		document.write("</li>");
	}

	document.write("</ul>");
}

let numero = parseInt(prompt("ingrese el numero que quiera saber su tabla"))

escribirTablaMultiplicar(numero);