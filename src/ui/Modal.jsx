import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
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

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-20 h-screen w-screen bg-neutral-950 bg-opacity-80">
      <div
        ref={modalRef}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-8 py-6 shadow-xl duration-300"
      >
        <button
          className="absolute right-4 top-3 rounded-full p-1 text-2xl duration-200 hover:bg-stone-200"
          onClick={close}
        >
          <IoClose />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
