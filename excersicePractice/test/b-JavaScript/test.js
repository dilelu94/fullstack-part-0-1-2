const x = 1 // no puede cambiar nunca
let y = 5 // si cambia como ella

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed

y = x + 2

console.log(y)