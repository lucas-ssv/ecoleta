import { render } from "@testing-library/react";
import { Button } from "../../../components/Button";

describe("Button component", () => {
  it("button renders correctly", () => {
    const { getByText } = render(<Button text="Cadastrar" />);

    expect(getByText("Cadastrar")).toBeInTheDocument();
  });
});
