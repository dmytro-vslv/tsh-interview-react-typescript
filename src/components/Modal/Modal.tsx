import { useRef } from "react";
import { createPortal } from "react-dom";
import { IconName } from "components/Icon/Icon.enum";
import { Backdrop, Icon } from "components";

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const modalRoot = document.getElementById("overlays") as HTMLElement;

const Modal = ({ show, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  if (!show) return null;

  return createPortal(
    <>
      <Backdrop show={show} />

      <div className="modal" ref={modalRef}>
        <button className="modal__button" onClick={onClose}>
          <Icon name={IconName.Close} />
        </button>

        {children}
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
