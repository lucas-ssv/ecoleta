import { createContext, ReactNode, useState } from "react";

type ModalContextProps = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalContext = createContext({} as ModalContextProps);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
