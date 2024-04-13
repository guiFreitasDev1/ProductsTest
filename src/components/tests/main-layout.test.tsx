import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../main-layout";
import "@testing-library/jest-dom";

describe("MainLayout", () => {
  it("should render correctly", () => {
    render(<Header />);
    expect(screen.getByText("sistemas")).toBeInTheDocument();
  });
});
