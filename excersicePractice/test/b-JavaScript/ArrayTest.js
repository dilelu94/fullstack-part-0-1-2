const array = [1, -1, 3] //arranca en 0

array.push(5) // agrega 5 a la lista

console.log(array.length) // 4 is printed
console.log(array[1])     // -1 is printed

console.log("foreach:") //
array.forEach(value => {
    value *= 1         // multiplica los valores de cada elemento * 1
    console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})  

console.log("array2:") //


const array2 = array.concat(6) // crea una nueva lista con el 6

console.log(array)  // [1, -1, 3] is printed
console.log(array2) // [1, -1, 3, 6] is printed

/*const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed */