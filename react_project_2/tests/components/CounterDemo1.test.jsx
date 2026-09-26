import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CounterDemo1 from "../../src/components/counter/CounterDemo1";

describe("CounterDemo1", () => {
    it("should display initial count as 0", () => {
        render(<CounterDemo1 />);
        expect(screen.getByText("Count:0")).toBeInTheDocument();
    });
    it("should increment the count", () => {
        render(<CounterDemo1 />);
        const incrementButton = screen.getByRole("button", { name: "Increment" });
        fireEvent.click(incrementButton);
        expect(screen.getByText("Count:1")).toBeInTheDocument();
    });
    it("should decrement the count", () => {
        render(<CounterDemo1 />);
        const decrementButton = screen.getByRole("button", { name: "Decrement" });
        fireEvent.click(decrementButton);
        expect(screen.getByText("Count:-1")).toBeInTheDocument();
    });
    it("should increment and decrement correctly", () => {
        render(<CounterDemo1 />);
        const incrementButton = screen.getByRole("button", { name: "Increment" });
        const decrementButton = screen.getByRole("button", { name: "Decrement" });
        fireEvent.click(incrementButton);
        expect(screen.getByText("Count:1")).toBeInTheDocument();
        fireEvent.click(incrementButton);
        expect(screen.getByText("Count:2")).toBeInTheDocument();
        fireEvent.click(decrementButton);
        expect(screen.getByText("Count:1")).toBeInTheDocument();
        fireEvent.click(decrementButton);
        expect(screen.getByText("Count:0")).toBeInTheDocument();
    });
});
