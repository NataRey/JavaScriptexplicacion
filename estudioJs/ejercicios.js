/*si el estudiante saca una nota superior a 30 aprueba de lo contrario no aprueba*/

let nota = parseInt(prompt("Ingrese la nota del estudiante"));
if(nota < 0 || isNaN(nota)){
    alert("Por favor ingrese una nota valida");
}else if(nota >=30){
    alert("Aprobo usted saco: "+nota);
}else{
    alert("Lo siento usted no aprobo su nota fue: "+nota);
}