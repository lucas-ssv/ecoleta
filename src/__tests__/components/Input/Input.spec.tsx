import { render } from "@testing-library/react";
import { Input } from "../../../components/Input";

describe("Input component", () => {
  it("input renders correctly", () => {
    const { getByText } = render(<Input label="Digite seu nome:" />);

    expect(getByText("Digite seu nome:")).toBeInTheDocument();
  });
});
