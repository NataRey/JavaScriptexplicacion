const num = [ 69,87,45,23,15];
let suma = 0;
let i = 1;

do{
    suma += num [i];
    i++
}while(i < num.length);

alert(`la suma de los numeros es: ${suma}`);