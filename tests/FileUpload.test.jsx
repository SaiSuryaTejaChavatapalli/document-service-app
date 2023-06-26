import { render } from "@testing-library/react";
import FileUpload from "../src/components/FileUpload";
import { it, describe } from "vitest";

describe("FileUpload", () => {
  it("renders headline", () => {
    render(<FileUpload />);
  });
});
