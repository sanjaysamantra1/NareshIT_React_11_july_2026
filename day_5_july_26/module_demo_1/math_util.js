export default function add(a, b) {   // default export
    console.log(`Addition of ${a} and ${b} is ${a + b}`)
}
export function sub(a, b) {  // Named export
    console.log(`Subtraction of ${a} and ${b} is ${a - b}`)
}
export function mul(a, b) {  // Named Export
    console.log(`Multiplication of ${a} and ${b} is ${a * b}`)
}

export let cars = ['Tata', 'Honda', 'Maruti']