import { ReactNode, useContext } from "react";
import ReactModal from "react-modal";
import { ModalContext } from "../../contexts/ModalContext";
import "./modal.scss";

interface ModalProps {
  children: ReactNode;
}

export function Modal({ children }: ModalProps) {
  const { isOpen, closeModal } = useContext(ModalContext);

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal}>
      {children}
    </ReactModal>
  );
}
