import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalContext";
import { Routes } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes />
      </ModalProvider>
    </BrowserRouter>
  );
}
