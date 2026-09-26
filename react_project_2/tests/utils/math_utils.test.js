import {
    afterEach, beforeAll, describe, expect, it, test,
    beforeEach, afterAll
} from "vitest";
import { add, addNewCar, cars, even_odd, mul, sumOfDigits } from "../../src/utils/math_utils";

describe("Should Test Math utils", () => { // Test suite = Group of testcases

    beforeAll(() => {
        console.log('Before All...')
    })
    beforeEach(() => {
        console.log('Before Each...')
    })
    afterEach(() => {
        console.log('After Each...')
    })
    afterAll(() => {
        console.log('After All...')
    })

    it('should verify add function', () => { // Test case-1
        console.log('It-1...')
        expect(add(10, 20)).toBe(30);
        expect(add(-10, 20)).toBe(10);
        expect(add(-10, -20)).toBe(-30);
        expect(add(10, -20)).toBe(-10);
    })
    it('should verify mul function', () => { // Test case-1
        console.log('It-2...')
        expect(mul(10, 20)).toBe(200);
    })
    test('should verify sumOfDigits function', () => { // Test case-1
        console.log('It-3...')
        expect(sumOfDigits(125)).toBe(8);
    })
    it('should verify addNewCar function', () => {
        console.log('It-4...')
        expect(cars).toBeDefined();
        expect(cars).toBeInstanceOf(Array);
        expect(cars.length).toBe(2);
        expect(cars).toContain('Tata');
        expect(cars).not.toContain('Maruti');
        addNewCar('Maruti');
        expect(cars).toBeDefined();
        expect(cars).toBeInstanceOf(Array);
        expect(cars.length).toBe(3);
        expect(cars).toContain('Tata');
        expect(cars).toContain('Maruti');
        expect(cars).not.toContain('Toyota');
    })

    it('should verify even_odd', () => {
        expect(even_odd(4)).toBe('even');
        expect(even_odd(5)).toBe('odd');
    })
})