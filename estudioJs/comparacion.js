// Operadores aritmeticos
/**
 * Binarios
 * suma (+) 5+3 =8
 * resta (-) 10-6=4
 * multiplcacion(*) 2*7=14
 * division (/)16/4=4
 * modulo(%)11%3=2
 * exponenciacion (**) 2 ** 3 = 8
 * Unarios
 * Incremento(++) X=5; X++; X=6;
 * decremento(--)X=5; X--; X=4;
 */


/*Realiza la suma de tres numeros y muestra el resultado el pantalla del usuarios*/

let numero1 = 5;
let numero2 = 7;
let numero3 = 15;
let suma =0;


suma = numero1+numero2+numero3;

alert(`la suma de ${numero1}+${numero2}+${numero3}= ${suma}`);

/*Realiza la resta de tres numeros y muestra el resultado el pantalla del usuarios*/

let num1 = 5;
let num2 = 7;
let num3 = 15;
let resta =0;


resta = num1-num2-num3;

alert(`la resta de ${num1}-${num2}-${num3}= ${resta}`);

const nombre = "Juan";
const apellido ="Perez";
//concatenar directo
alert(nombre + apellido);
//concatenar indirecto
const nombreCompleto = nombre +" "+ apellido;
alert(nombreCompleto);

/**Multiplicacion
 * hallar el area de un rectangulo
*/

const base = 8;
const altura =15;
const areaRectangulo = base * altura;
alert(`El area del rectangulo cuya base fue ${base} y altura de ${altura} es igual a ${areaRectangulo}`);

/**Division
 * Obtener la velocidad a partir de la distancia y el tiempo
 */

const distancia = 100.00; //metros
const tiempo = 60.00;//segundos

const velocidad = distancia/tiempo;
console.log(velocidad);
alert(`en una distancia de ${distancia} metros y tiempo de ${tiempo} la velocidad fue de ${velocidad}`);














