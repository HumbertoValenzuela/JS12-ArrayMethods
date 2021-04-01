// 6. .every

// Todos los elementos de un Array deben cumplir esa condición
// para que nos retorne un true
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
]
// nota: se itera sobre variable producto
// todos son menor que 1000 entonces es true
const resultado = carrito.every((producto) => producto.precio < 1000)
console.log(resultado);// true
// false porque no todos cumplen condición
const resultado1 = carrito.every((producto) => producto.precio < 500)
console.log(resultado1);// false

// si quieres revisar que al menos uno cumpla con la condición. Tenemos el metodo .some
const resultado2 = carrito.some((producto) => producto.precio < 500)
console.log(resultado2);//true

// versión && (and) es . every
// version || (or) es .some