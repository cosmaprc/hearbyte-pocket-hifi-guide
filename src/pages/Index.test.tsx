import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "./Index";

describe("Index page", () => {
  it("renders the HeartByte hero and section headings", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Pocket Hi-Fi Guide/i).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("heading", { level: 2, name: /software/i }),
    ).toBeInTheDocument();
  });
});