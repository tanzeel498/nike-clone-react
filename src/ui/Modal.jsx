import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const modalRef = useOutsideClick(close);

  useEffect(
    function () {
      if (name === openName) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "auto";
    },
    [name, openName],
  );
  // for escape press
  useEffect(
    function () {
      function handleCloseSearch(e) {
        if (e.keyCode === 27) close();
      }
      document.addEventListener("keydown", handleCloseSearch);

      return () => document.removeEventListener("keydown", handleCloseSearch);
    },
    [close],
  );

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900 bg-opacity-80">
      {cloneElement(children, { ref: modalRef, onClick: close })}
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
