// 1. .some

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//.some, .foreach, para realizar la misma tarea. Se Recomienda usar .some para

//foreach mostrar datos de un arreglo
meses.forEach( (mes) =>{ console.log(mes) })

//foreach Comprobar si un valor existe en un arreglo
meses.forEach( (mes) =>{ 
    if( mes === 'Febrero'){
    console.log(`${mes} ...Encontrado`); 
    }
})

// .some Comprobar si un valor existe en un arreglo de objetos
// return colocará el valor en la const existe
const existe = carrito.some( (producto) => {
    return producto.nombre === 'Celular'
})
console.log(existe);

// .some en un arreglo de índices o tradicional. 
// Comprobar si un valor existe en un arreglo
// no se coloca mes. porque no es de objetos, es de índices

const existe2 = meses.some( (mes) => mes === 'Febrero')
console.log(existe2);
//.includes uso de array Methods. 
// Comprobar si un valor existe en un arreglo. 
// .includes retorna un valor, es decir, se debe cargar a una variable.
// .includes tiene valores booleans true y false
// .includes funciona solo cuando un arreglo esta basado en el índice
const resultado = meses.includes('Abril');
console.log(resultado); // true encontrado