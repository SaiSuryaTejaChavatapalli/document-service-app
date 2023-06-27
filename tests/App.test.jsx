//Write vitest unit test cases for App.jsx component
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { describe, it, expect, beforeEach } from "vitest";
import { StaticRouter } from "react-router-dom/server";
describe("App component", () => {
  beforeEach(() => {
    render(
      <StaticRouter>
        <App />
      </StaticRouter>
    );
  });
  it("App component Heading", () => {
    expect(screen.getByText("Welcome to Document Service")).toBeInTheDocument();
  });

  it("Upload Files Image", () => {
    expect(screen.getByAltText("upload-files-img")).toBeInTheDocument();
  });

  it("View Files Image", () => {
    expect(screen.getByAltText("view-files-img")).toBeInTheDocument();
  });

  it("Upload File Heading", () => {
    expect(screen.getByText("Upload File")).toBeInTheDocument();
  });

  it("View File Heading", () => {
    expect(screen.getByText("View Files")).toBeInTheDocument();
  });
});
