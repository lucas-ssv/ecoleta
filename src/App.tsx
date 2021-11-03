import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ItemProvider } from "./contexts/ItemContext";
import { ModalProvider } from "./contexts/ModalContext";
import { Routes } from "./routes";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ItemProvider>
          <Routes />
          <ToastContainer autoClose={3000} theme="light" />
        </ItemProvider>
      </ModalProvider>
    </BrowserRouter>
  );
}
