import { createPortal } from 'react-dom'

type ModalProps ={
    children :React.ReactNode;
    onClose?: ()=> void;
}
export default function Modal({ children, onClose }:ModalProps) {

  return(
    <>
      <div className="backdrop" onClick={onClose} />
      <dialog open className="modal">
        {children}
      </dialog>
      
    </>,
  );
}
