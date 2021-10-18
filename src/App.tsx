import { BrowserRouter } from "react-router-dom";
import { ItemProvider } from "./contexts/ItemContext";
import { ModalProvider } from "./contexts/ModalContext";
import { Routes } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ItemProvider>
          <Routes />
        </ItemProvider>
      </ModalProvider>
    </BrowserRouter>
  );
}
