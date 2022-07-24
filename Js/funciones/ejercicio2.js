function info(cadena) {
 
    var resultado = "La cadena \""+cadena+"\" ";
   
    if(cadena == cadena.toUpperCase()) {
      resultado += " está formada sólo por mayúsculas";
    }
    else if(cadena == cadena.toLowerCase()) {
      resultado += " está formada sólo por minúsculas";
    }
    else {
      resultado += " está formada por mayúsculas y minúsculas";
    }
   
    return resultado;
  }
   
  alert(info("PROYECTO DE JS3 FUNCIONES"));
  alert(info("comprobacion de mayusculas y minusculas"));
  alert(info("PrueBa De MaYusCula Y MinusCulAs JuntAS"))