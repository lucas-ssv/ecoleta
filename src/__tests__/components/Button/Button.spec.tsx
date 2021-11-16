import { render, screen } from "@testing-library/react";
import { Button } from "../../../components/Button";

describe("Button component", () => {
  it("button renders correctly", () => {
    render(<Button text="Cadastrar" />);

    expect(screen.getByText("Cadastrar")).toBeInTheDocument();
  });
});
