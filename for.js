/**Recorrer un array mostrar los elementos de ese array */

const numeros = [1,2,3,4,5];
//recorrido      0 1 2 3 4

for(let i= 0;  i < numeros.length; i++){
//para (que i que es nuestra variable inicie su recorrido desde 0 revise si (i) es menor a la longitud del arreglo, mientras esto se cumpla incremente de uno en uno)
alert(numeros[i]);
// en este caso  envio un alert donde voy al recorrido y traigo ese valor y lo muestro en pantalla
}