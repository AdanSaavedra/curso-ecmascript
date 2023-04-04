const lista = new Set();

lista.add('Item 1')
lista.add('Item 2').add('Item 3')

console.log(lista)


// un ejemplo
const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos)