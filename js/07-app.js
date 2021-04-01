// 7. .concat
// .concat permite unir dos arreglos de índices
// Los une a como uno los va declarando, es decir, el orden importa.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ['Agosto', 'Septiembre', 'Octubre'];

const meses3 = ['Noviembre', 'Diciembre'];

// primera forma para realizar la concadenación de dos arreglos de índices
const concadenar = meses.concat(meses2);
console.log(concadenar);

// si se crea un tercer arreglo para poder concadenar
const concadenar1 = meses.concat(meses2, meses3);
console.log(concadenar1);

//que pasa cuando no se agrega un arreglo, más bien un string
const concadenar2 = meses.concat(meses2, meses3, 'Otro mes');
console.log(concadenar2); // se observa que agrega el string Otro mes

//Segunda forma es usando el Rest o Spread Operator
const resultado = [...meses, ...meses2];
console.log(resultado);

// agregar un string en un spread operator, agregará el string
const resultado1 = [...meses, ...meses2, 'Otro mes'];
console.log(resultado1);

//Si agregas el string como spread operator, es decir, ...'Otro mes'.
//Me va a crear un elemento en mi arreglo por cada letra que tenga ese String.
//Entonces asegurarse de que sea un arreglo o quitarle los 3 puntos al string
const resultado2 = [...meses, ...meses2, ...'Otro mes'];
console.log(resultado2);