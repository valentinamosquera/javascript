var sabor =prompt("ingrese tu sabor");
var precio
if(sabor === "oreo"){
    precio=1500-1500 * 0.5
    document.write("Este helado tiene descuento y el total a pagar es " + precio)
}
else if(sabor =="fresa"){
   precio = 2000
   document.write(precio)
}
else if(sabor =="Vainilla"){
    precio = 3000
   document.write(precio)
}
else if(sabor =="brawnie"){
    precio = 5000-5000 * 0.10 
   document.write("Este helado tiene descuento y el total a pagar es " +  precio)
}
else{
    document.write("lo sentimos no tenemos ese sabor")
    
}
