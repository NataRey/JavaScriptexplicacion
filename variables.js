/*el usuario ingresa unas notas de 0 a 100 dependiendo del puntaje se le dara una calificacion por letras
100  = A pero adiciional tiene una felicitacion 
>=90 = A
>=80 B
>=70 C
>=60 D
<60 F*/

let puntaje = parseInt(prompt("Ingrese un puntaje de 0-100"));
if (isNaN(puntaje)|| puntaje < 0 || puntaje > 100){
    alert("por favor ingrese una puntuacion valida en 0 y 100");
}else{
    //realice el calculo de la calificacion ingresada
    switch(true){
        case(puntaje >=90):
            alert("¡Excelente obtuvo una calificacion de A!");
            break;
        case(puntaje >=80):
            alert("¡Muy bien obtuvo una calificacion de B!");
            break;
        case(puntaje >=70):
            alert("¡Bien obtuvo una calificacion de C!");
            break;
        case(puntaje >=60):
            alert("¡Satisfactorio obtuvo una calificacion de D!");
            break;
        default:
            alert("¡Insuficiente obtuviste una calificacion de F!");
    }
    if (puntaje === 100){
        alert("¡Felicitaciones! Obtuviste la nota mas alta que fue 100")
    }
}


/*
let dia = parseInt(prompt("Ingrese un numero entre 1 a 7 para indicarle a que dia de la semana corresponde"));

switch (dia){
    case 1:
        alert("¡Es lunes!");
        break;
    case 2:
        alert("¡Es martes!");
        break;
    case 3:
        alert("¡Es miercoles!");
        break;
    case 4:
        alert("¡Es jueves!");
        break;
    case 5: 
        alert("¡Es viernes!");
        break;
    case 6:
        alert("¡Es sabado!");
        break;
    case 7: 
        alert("¡Es domingo!");
        break;
    default:
        alert("Entrada no es valida. Ingrese un numero del 1 al 7 ");
}*/
