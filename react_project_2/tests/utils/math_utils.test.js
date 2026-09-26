import { describe, expect, it } from "vitest";
import { add,mul, sumOfDigits } from "../../src/utils/math_utils";

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
    it('should verify sumOfDigits function', () => { // Test case-1
        expect(sumOfDigits(125)).toBe(8);
    })
})