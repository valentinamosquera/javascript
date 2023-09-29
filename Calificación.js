
var calificacion =prompt("ingrese su calificación");

if(calificacion>=7 && calificacion <9){
    alert("aprobado");

}else if (calificacion>=9 && calificacion<=10){
     alert("felicidades promedio alto");
}else if ( calificacion>10){
     alert( "solo se acepta notas inferiores a 10");
}else{
    alert("reprobado");
}