//Write test case for NavBar component using vitest

import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import FileView from "../src/components/FileView/FileView";

describe("FileView Component-Table Columns", () => {
  beforeEach(() => {
    render(<FileView />);
  });
  it("ID in Fileview", () => {
    expect(screen.getByText("ID")).toBeInTheDocument();
  });
  it("Name in Fileview", () => {
    expect(screen.getByText("Name")).toBeInTheDocument();
  });
  it("Kind of File in Fileview", () => {
    expect(screen.getByText("Kind of File")).toBeInTheDocument();
  });
  it("Statement Details in Fileview", () => {
    expect(screen.getByText("Statement Details")).toBeInTheDocument();
  });
  it("Size in Fileview", () => {
    expect(screen.getByText("Size")).toBeInTheDocument();
  });

  it("Date of Created in Fileview", () => {
    expect(screen.getByText("Date of Created")).toBeInTheDocument();
  });
  it("Download in Fileview", () => {
    expect(screen.getByText("Download")).toBeInTheDocument();
  });
  it("Delete in Fileview", () => {
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
});

//write a test case for check whether element with attribute data-testid  is toBeInDocument

describe("FileView Component -Date elements", () => {
  it("Start Date input element", () => {
    render(<FileView />);
    const startDate = screen.getByTestId("start-date");
    expect(startDate).toBeInTheDocument();
  });
  it("End Date input element", () => {
    render(<FileView />);
    const endDate = screen.getByTestId("end-date");
    expect(endDate).toBeInTheDocument();
  });
});

//Test case for Button Element
describe("FileView Component -OK Button", () => {
  it("OK Button in Fileview", () => {
    render(<FileView />);
    const okButton = screen.getByRole("button", { name: "OK" });
    expect(okButton).toBeInTheDocument();
  });
});

//Write testcase for type search input element
describe("FileView Component -Search input element", () => {
  it("Search input element in Fileview", () => {
    render(<FileView />);
    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();
  });
});

//Write testcase for not found element
describe("FileView Component -Not Found element", () => {
  it("Not Found element in Fileview", () => {
    render(<FileView />);
    const notFound = screen.getByText("Not Found");
    expect(notFound).toBeInTheDocument();
  });
});
