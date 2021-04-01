// 8. Spread Operator

// el spread operator crea un nuevo arreglo y no modifica el original
// con spread operator el orden importa

// dato: programación Funcional, en ella se trata de no modificar el arreglo original. y con spread operator es una buena forma de hacerlo
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// Modificando el arreglo original
meses.push('plop');

// Agregar un elemento al final de un arreglo de índices. usando spread operator
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

// Agregar un elemento al Inicio de un arreglo de índices. usando spread operator
const meses3 = ['Agosto', ...meses];
console.log(meses3);

// Spread Operator con arreglo de Objetos
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const producto = { nombre: 'Disco Duro', precio: '100'};

// como se agrega el objeto producto al arreglo de objetos
// usando el spread operator
const carrito2 = [...carrito, producto];//notar que no lleva punto
console.log(carrito2);

// const carrito2 = [...carrito, ...producto];TypeError: producto is not iterable
// esto sucede porque no es iterable, es un objeto.
// entonces aquí se esta asignando un spread operator a un objeto y eso no se puede hacer
