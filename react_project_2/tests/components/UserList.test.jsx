import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import UserList from "../../src/components/userlist/UserList";

describe("UserList", () => {
    it("fetches and displays users", async () => {
        const users = [
            { id: 1, name: "Leanne Graham", email: "leanne@example.com" },
            { id: 2, name: "Ervin Howell", email: "ervin@example.com" }
        ];
        vi.spyOn(globalThis, "fetch").mockResolvedValue({
            ok: true,
            json: async () => users
        });
        render(<UserList />);
        expect(await screen.findByText("Leanne Graham")).toBeInTheDocument();
        expect(await screen.findByText("leanne@example.com")).toBeInTheDocument();
        expect(fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users");
    });
});