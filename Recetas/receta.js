function receta(){
    racion= prompt("raciones para el spaguetis");
var racion, guanciale, huevo, queso, spaguetis, sal, pimienta ;

guanciale= racion*30;
huevo = racion*2;    
queso =racion*25;
spaguetis= racion*100;
sal=racion*20;
pimienta= racion*20;
document.write("se necesita para hacer una porcion de spaguetis lo siguente:<br>" +  guanciale +" gramos guanciale<br>"+ huevo+" huevos <br>"
+queso +" gramos de queso parmesano <br> "+ spaguetis+ "gramos de spaguetis <br>"+ sal+"gramos de sal <br>"+ pimienta+"gramos de pimienta");

}

function costos(){

    racion = Number(prompt("Por racion de spaguetis"));
var racion,  guanciale, huevo, queso, spaguetis, sal, pimienta,total ;
guanciale= racion*7500;
huevo = racion*1200;   
queso =racion*6300;
spaguetis= racion*6300;
sal= racion*500;
pimienta= racion*500;
total=  guanciale+huevo+queso+spaguetis+sal+pimienta;
document.write("los costos para casa racion  son: "+ total);
}