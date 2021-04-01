// 4. .filter
// filter crea un nuevo arreglo, basado en el parametro que es evaluado 
// Usado para buscar y filtrar resultados
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// filter es mas versatil que .findIndex.
// findIndex entrega un valor el índice
// pero .filter es diferente. porque me permite realizar mas operaciones sobre los array

// supongamos queremos todos los productos que cuestan + de 400 a nuestro carrito

let resultado;
// itera en todo el arreglo de carrito. va a asignar a resultado todos los productos mayor a 400
resultado = carrito.filter( (producto) => producto.precio > 400)
console.log(resultado);// crea un nuevo arreglo con el resultado de la condición 

// supongamos que queremos sacar del carrito de compra a Audifonos
let resultado2;
resultado2 = carrito.filter( (producto) => {
    // Trae todos excepto Audifonos 
    return producto.nombre !== 'Audifonos'})
console.log(resultado2);


