import { BrowserRouter } from "react-router-dom";
import { CardItemProvider } from "./contexts/CardItemContext";
import { ModalProvider } from "./contexts/ModalContext";
import { Routes } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <CardItemProvider>
          <Routes />
        </CardItemProvider>
      </ModalProvider>
    </BrowserRouter>
  );
}
