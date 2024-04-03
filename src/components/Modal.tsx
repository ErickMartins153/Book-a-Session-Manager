import { type ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  mode: "BOOK" | "UPCOMMING";
  onConfirm?: () => void;
};

export default function Modal({
  children,
  isOpen,
  onClose,
  title,
  mode,
  onConfirm,
}: ModalProps) {
  if (!isOpen) return;

  function bookSessionHandler() {
    if (onConfirm !== undefined) {
      onConfirm();
    }
    onClose();
  }

  return createPortal(
    <div className=" fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-black bg-opacity-50">
      <dialog
        className="bg-[#6c5d81] p-4 fixed rounded-md shadow-md w-1/2 overflow-y-auto max-h-96 overflow-hidden"
        open={isOpen}
      >
        <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
        <div className="flex flex-col">
          {children}
          <div className="flex justify-end">
            <button
              className="mt-4 px-4 pt-2 rounded-none bg-transparent border-0 hover:bg-transparent hover:border-b text-white "
              onClick={onClose}
            >
              Close
            </button>
            {mode === "BOOK" && (
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg"
                onClick={bookSessionHandler}
              >
                Book Session
              </button>
            )}
          </div>
        </div>
      </dialog>
    </div>,
    document.getElementById("portal")!
  );
}