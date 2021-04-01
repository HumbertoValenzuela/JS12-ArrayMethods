// 5. .find

// Diferencia entre findIndex y find. .find crea un nuevo arreglo basado 
// en la condición que estas revisando. findIndex nos dice el indice del elemento

// .find importante retorna el primer elemento que cumpla la condición
//  es decir, en carrito tenemos dos elementos que tiene el mismo precio.
//  Solo muestra la primera coincidencia

//.find sino encuentra coincidencia arroja mensaje undefined

// si quieres mostrar uno o más coincidencia y mostrarlas, entonces ocupar .filter
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
]

//Con un foreach
let resultado;
carrito.forEach( (producto, index) => {
    if(producto.nombre === 'Tablet') {
        resultado = carrito[index]
    }
})
// nos creo el objeto {nombre: "Tablet", precio: 200}
console.log(resultado);

// con .find
const resultado2 = carrito.find( (producto) => {
    return producto.nombre === 'Tablet'
})
console.log(resultado2);

// con .find con dos o mas coincidencia, .find arroja el primer coincidencia, los otros quedan fuera
const resultado3 = carrito.find( (producto) => {
    return producto.precio === 100
})
console.log(resultado3);//{nombre: "Televisión", precio: 100}