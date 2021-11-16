import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Modal } from "../../../components/Modal";
import { Home } from "../../../pages/Home";

describe("Modal component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    fireEvent.click(getByText("Pesquisar pontos de coleta"));
  });
});
