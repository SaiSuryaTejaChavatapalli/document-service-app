import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { StaticRouter } from "react-router-dom/server";
import NavBar from "../src/components/NavBar/NavBar";
describe("NavBar", () => {
  beforeEach(() => {
    render(
      <StaticRouter>
        <NavBar />
      </StaticRouter>
    );
  });
  it("should render Home element", () => {
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
  it("should render Upload Document element", () => {
    expect(screen.getByText("Upload Document")).toBeInTheDocument();
  });
  it("should render View Document element", () => {
    expect(screen.getByText("View Document")).toBeInTheDocument();
  });
  it("should render Document Service element", () => {
    expect(screen.getByText("Document Service")).toBeInTheDocument();
  });
});
