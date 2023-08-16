import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the correct elements on the screen", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole("textbox")).toHaveLength(4);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders an error message with an empty form and doesn't redirect", async () => {
    render(<App />);

    const submitBtn = screen.getByRole("button", { name: "Submit" });

    fireEvent.click(submitBtn);

    expect(
      await screen.findByText("All fields are required.")
    ).toBeInTheDocument();
  });

  it("redirects to the results component when all fields are filled and the button is clicked", async () => {
    render(<App />);

    const submitBtn = screen.getByRole("button", { name: "Submit" });

    const [name, email, rating, comment] = screen.getAllByRole("textbox");

    fireEvent.change(name, { target: { value: "Ben" } });
    fireEvent.change(email, { target: { value: "Ben@mail.com" } });
    fireEvent.change(rating, { target: { value: "3" } });
    fireEvent.change(comment, { target: { value: "Comment" } });

    fireEvent.click(submitBtn);

    expect(
      await screen.findByRole("heading", { level: 1, name: "Feedback Results" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { level: 1, name: "Feedback Form" })
    ).not.toBeInTheDocument();
    expect(await screen.findByText("Ben@mail.com")).toBeInTheDocument();
    expect(await screen.findByText("Comment")).toBeInTheDocument();
    expect(await screen.findByTestId("chart")).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: "Go back" })
    ).toBeInTheDocument();

    fireEvent.click(await screen.findByRole("button", { name: "Go back" }));

    expect(
      await screen.findByRole("heading", { level: 1, name: "Feedback Form" })
    ).toBeInTheDocument();
  });
});
