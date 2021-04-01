// 2. .findIndex para encontrar la posición en un array
// solo arroja un valor, un indice
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, i) => {
    console.log(i, mes);
    // encontrar de forma manual un dato
    if(mes === 'Marzo'){
        console.log(`${i} ...encontrado`);        
    }
    if(mes === 'Diciembre'){
        console.log(`${i} ...`);//no retorna valor, al no encontrar        
    }    
})

// .findIndex Encontrar el índice de Abril
const indice = meses.findIndex( (mes) => { return mes === 'Abril'})
console.log(` ...findIndex ${indice}`); //retorna 3

// .findIndex No encuentra el índice de Diciembre. resultado -1
const indice2 = meses.findIndex( (mes) => mes === 'Diciembre')
console.log(indice2);//retorna valor -1

//.findIndex buscar un indice en un arreglo de objetos
const indice3 = carrito.findIndex( (producto) => {
    return producto.nombre === 'Audifonos'
})
console.log(`indice3 ${indice3}`);