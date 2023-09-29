var destino =prompt("ingrese su destino");
var precio =prompt ("ingrese su valor")
if(destino == "mexico"){
    precio = precio -precio*0.5
    document.write(precio)
}
else if(destino =="españa"){
   precio = precio - precio*0.10
   document.write(precio)
}
else if(destino =="londres"){
    precio = precio - precio*0.20
   document.write(precio)
}
else if(destino =="africa"){
    precio = precio - precio*0.25
   document.write(precio)
}
else{
    document.write("no tiene ningun descuento")
}
