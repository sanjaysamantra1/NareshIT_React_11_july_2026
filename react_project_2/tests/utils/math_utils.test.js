import { describe, expect,it } from "vitest";
import { add } from "../../src/utils/math_utils";

describe("Should Test Math utils", () => { // Test suite = Group of testcases
    it('should verify add function', () => { // Test case-1
        expect(add(10, 20)).toBe(30);
    })
})