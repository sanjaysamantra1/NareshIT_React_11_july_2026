import { describe, expect, it,test } from "vitest";
import { add, addNewCar, cars, mul, sumOfDigits } from "../../src/utils/math_utils";

describe("Should Test Math utils", () => { // Test suite = Group of testcases
    it('should verify add function', () => { // Test case-1
        expect(add(10, 20)).toBe(30);
        expect(add(-10, 20)).toBe(10);
        expect(add(-10, -20)).toBe(-30);
        expect(add(10, -20)).toBe(-10);
    })
    it('should verify mul function', () => { // Test case-1
        expect(mul(10, 20)).toBe(200);
    })
    test('should verify sumOfDigits function', () => { // Test case-1
        expect(sumOfDigits(125)).toBe(8);
    })
    it('should verify addNewCar function', () => {
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
})