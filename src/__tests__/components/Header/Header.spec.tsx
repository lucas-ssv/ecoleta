import { render, screen } from "@testing-library/react";
import { FiArrowLeft } from "react-icons/fi";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../../../components/Header";

describe("Header component", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Header Icon={<FiArrowLeft />} path="/" text="Voltar para home" />
      </BrowserRouter>
    );

    expect(screen.getByText("Voltar para home")).toBeInTheDocument();
  });
});
