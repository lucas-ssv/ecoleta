import { render, screen } from "@testing-library/react";
import { Input } from "../../../components/Input";

describe("Input component", () => {
  it("input renders correctly", () => {
    render(<Input label="Digite seu nome:" />);

    expect(screen.getByText("Digite seu nome:")).toBeInTheDocument();
  });
});
