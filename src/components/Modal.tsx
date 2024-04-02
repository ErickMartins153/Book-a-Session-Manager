import { type ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export default function Modal({
  children,
  isOpen,
  onClose,
  title,
}: ModalProps) {
  if (!isOpen) return;

  return createPortal(
    <div className=" fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-black bg-opacity-50">
      <dialog
        className="modal bg-[#6c5d81] p-4 rounded-md shadow-md w-1/2"
        open={isOpen}
      >
        <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
        <div className="flex flex-col">
          {children}
          <div className="flex justify-end">
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>,
    document.getElementById("portal")!
  );
}
