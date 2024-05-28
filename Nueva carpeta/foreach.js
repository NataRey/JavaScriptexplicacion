/*sintaxis

for (variable_temporal of conjuntos_datos){
    bloque de codigo
}*/

/*const numeros=[1,2,3,4,5];
for(numero of numeros){
    console.log(numero);
}*/

/*const letras=["a","b","c"];
for (x of letras){
    console.log(x)
}*/

/*const figuras =["triangulo","cuadrado","circulo","rectangulo","pentagono"];

figuras.forEach(function(temporal){
    console.log(temporal);
})*/

/*const estudiantes =[
    {nombre:"pepito", edad:19},
    {nombre:"juanito", edad:20},
    {nombre:"pulgarcito", edad:60},
    {nombre:"pepita", edad:35},
    {nombre:"juanita", edad:14},
    {nombre:"pulgarcita", edad:100}
];

estudiantes.forEach(function(datosRecogidos){
    console.log(`Nombre:${datosRecogidos.nombre}, Edad:${datosRecogidos.edad}`)
});*/
/*
const suma = [1, 2, 3, 4, 5];

suma.forEach(function(resultado, x) {
  suma [x]= resultado * 2;
});

console.log(suma);*/

const nombres =['Juan','Pedro','Maria'];
const nombresEnMayuscula =[];

nombres.forEach(function(nombreTemporal){
    console.log(nombreTemporal);
    nombresEnMayuscula.push(nombreTemporal.toUpperCase());

});

console.log(nombresEnMayuscula);





