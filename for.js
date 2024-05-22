/**Recorrer un array mostrar los elementos de ese array */

const numeros = [1,2,3,4,5];
//recorrido      

for(let i= 0;  i < numeros.length; i++){
//para (que i que es nuestra variable inicie su recorrido desde 0 revise si (i) es menor a la longitud del arreglo, mientras esto se cumpla incremente de uno en uno)
alert(numeros);
// en este caso  envio un alert donde voy al recorrido y traigo ese valor y lo muestro en pantalla
}

/// ejercicio resuelto 
 const numIngresado=parseInt(prompt("Ingrese un numero para calcular la suma de su anteriores numeros"));
 
 console.log(`este es el numero ingresao ${numIngresado}`);
 let pepito =0;

 for (let x = 0; x <= numIngresado; x++){
   pepito += x ;

   console.log(`esto vale x ${x}`);
   console.log(`la suma es ${pepito}`);
 }

 /* 10 + 1 = 11
    10 + 2 = 12
    10 + 3 = 13
    10 + 4 = 14
    10 + 5 = 15
    10 + 6 = 16
    10 + 7 = 17
    10 + 8 = 18
    10 + 9 = 19
    10 + 10 = 20

    primer paso declaro una variable que contenga el numero 10*/
    
    for (let a=1; a<=10; a++){ 
        console.log (`10 + ${a} = ${10+a}`);
    }

    

