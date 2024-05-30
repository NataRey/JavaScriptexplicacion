/*sintaxis
if(condicion){
    realice algo
}else{
    realice otra cosa};*/

/**Rango segun su edad muestre por consola 
 * si la persona es menor a 18 que diga usted es joven 
 * si la persona es mayor a 18 que diga usted es mayor de edad
 * si la persona es mayor a 60 que diga usted es una adulto mayor
 * no pueden ingresar letras ni numeros negativos*/
/*ParseInt = convierta a entero
Prompt = recibir datos desde la web pero siempre en formato string*/
/*let edad = parseInt(prompt("Ingrese su edad"));
/**isNaN = me devuelve un valor boleano si lo que ingreso es un string me retorna un true pero si ingreso un numero me retorna un false 
if(isNaN(edad) || edad<0){
    console.log("Por favor ingrese una edad valida");
}else if(edad >=60) {
    console.log("usted es un adulto mayor");
}else if(edad >=18){
    console.log("usted es mayor de edad");
}else{
    console.log("usted es menor de edad");
}*/


/**Calcular el mayor de dos numeros */
let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

if(isNaN(num1 && num2) || num1 && num2<0){
    console.log("Por favor ingrese un numero valido");
}else if(num1 === num2){
    console.log("usted ingreso dos numeros iguales por favor ingrese numeros diferentes");
}else if (num1 > num2){
    console.log(num1+" Es el numero mayor");
}else if (num2 > num1){
    console.log(num2+" Es el numero mayor");
}

