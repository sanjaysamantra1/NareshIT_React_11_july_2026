export function add(a, b) {
    return a + b;
}

export function mul(a, b) {
    return a * b;
}

export function sumOfDigits(num) {
    let sum = 0;
    let rem;
    while (num != 0) {
        rem = num % 10;
        sum = sum + rem;
        num = Math.floor(num / 10);
    }
    return sum;
}

export const cars = ['Tata', 'Honda']
export function addNewCar(newCar) {
    cars.push(newCar);
}