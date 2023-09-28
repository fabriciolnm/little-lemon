import { render, screen } from "@testing-library/react";

import App from "./App";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

describe("Jest", () => {
  it("should run", () => {
    render(<App />);

    expect(screen.queryByText("Little Lemon")).toBeInTheDocument();
  });
  it("email should be empty", () => {
    render(<Signup />);

    const emailInputElement = screen.getByRole("textbox");
    expect(emailInputElement.value).toBe("");
  });
  it("password / confirm password should be empty", () => {
    render(<Signup />);

    const passwordInputElement = screen.getByRole("textbox");
    const confirmPasswordInputElement = screen.getByPlaceholderText(
      /Confirm your password/i
    );
    expect(passwordInputElement.value).toBe("");
    expect(confirmPasswordInputElement.value).toBe("");
  });
  it("Footer links", () => {
    render(<Footer/>)

    screen.getByText(/home/i);
    screen.getByText(/about/i);
    screen.getByText(/menu/i);
    screen.getByText(/order/i);
  })
});
