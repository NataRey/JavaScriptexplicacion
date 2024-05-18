const frutas =["manzana", "pera","uva"];
const verduras =["zanahoria","brocoli", "tomate"];
const mercado =["arroz","aceite"];
// concatenar concat

const frutasyVerduras = frutas.concat(verduras,mercado);

console.log(`El array es igual a ${frutasyVerduras}`);
///pop eliminar el ultimo elemento

const eliminando =frutasyVerduras.pop();
//elimina y devuleve el ultimo elemento
console.log(`se ha eliminado ${eliminando} del array`);
console.log(`El array cambiado es igual a ${frutasyVerduras}`);

/// push agrega elementos al final de una array
const agregar =["mango","fresa"];
frutas.push(...agregar);

console.log (frutas);
const frutasyVerduras2 = frutas.concat(verduras);
console.log(`la union es ${frutasyVerduras2}`);

///shift eliminar el primer elemento de mi array

const eliminaPrimero = frutasyVerduras2.shift();

console.log(`lo que elimine del array fue ${eliminaPrimero}`);
console.log(frutasyVerduras2);













