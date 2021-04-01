// 3. .reduce función reductora
// el poder de .reduce se nota en los arreglos de Objetos
// Toma una gran cantidad de datos, unirlos y entregarte un resultado
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// .foreach Decir a usuario cuanto tiene que pagar
let total = 0; //se irá sumando sobre este valor
carrito.forEach( (producto) => total += producto.precio);
console.log(total);//total 2200

// .reduce Decir a usuario cuanto tiene que pagar
// .reduce se recomienda usar. y además es moderna
// total seria el valor previo.
// total inicia en 0
// , 0 es el valor inicial. Lo mismo que const total=0;
let result = carrito.reduce((total, actual) => 
total + actual.precio, 0)
console.log(` ${result}`);
// supongamos un político comienza con votos fantasma de 200
let result2 = carrito.reduce((total, actual) => 
total + actual.precio, 200)
console.log(`político ${result2}`);