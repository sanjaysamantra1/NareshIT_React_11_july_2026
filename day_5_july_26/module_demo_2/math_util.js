function add(a, b) {
    console.log(`Addition of ${a} and ${b} is ${a + b}`)
}
function sub(a, b) {
    console.log(`Subtraction of ${a} and ${b} is ${a - b}`)
}
function mul(a, b) {
    console.log(`Multiplication of ${a} and ${b} is ${a * b}`)
}

let cars = ['Tata', 'Honda', 'Maruti']

export default {
    add, sub, mul, cars
}