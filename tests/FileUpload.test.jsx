import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import FileUpload from "../src/components/FileUpload/FileUpload";

describe("File Upload Component", () => {
  beforeEach(() => {
    render(<FileUpload />);
  });
  it("File Upload", () => {
    expect(screen.getByText("Upload Document")).toBeInTheDocument();
  });
  it("File Upload Choose file input", () => {
    expect(screen.getByTestId("file-upload-input")).toBeInTheDocument();
  });
  it("File Upload -Upload file button check", () => {
    const applicationId = screen.getByText("Upload File");
    expect(applicationId).toBeInTheDocument();
  });
  it("File Upload 2 - ApplicationId textfield check", () => {
    const applicationId = screen.getByTestId("applicationId");
    expect(applicationId).toBeInTheDocument();
  });
  it("File Upload 2 - statementDetails textfield check", () => {
    const applicationId = screen.getByTestId("statementDetails");
    expect(applicationId).toBeInTheDocument();
  });
  it("File Upload 2 - kindOfFile dropdown check", () => {
    const applicationId = screen.getByTestId("kindOfFile");
    expect(applicationId).toBeInTheDocument();
  });
  it("Loader is present or not", () => {
    const applicationId = screen.getByTestId("loader");
    expect(applicationId).toBeInTheDocument();
  });
  it("Toast is present or not", () => {
    const toastContainer = screen.getByTestId("toast");
    expect(toastContainer).toBeInTheDocument();
  });
});
