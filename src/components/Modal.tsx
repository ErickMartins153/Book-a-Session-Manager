import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

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
}: ModalProps) {
  if (!isOpen) return;

  return createPortal(
    <>
      <div className="fixed top-0 left-0 w-full h-[100vh] inset-0 z-10 backdrop-blur bg-black bg-opacity-50" />
      <motion.dialog
        className="bg-[#6c5d81] fixed p-4 top-10 max-w-[90%] z-20 rounded-md shadow-md w-1/2 overflow-y-auto max-h-96 overflow-hidden"
        variants={{
          hidden: { opacity: 0, y: -60 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open={isOpen}
      >
        <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
        <div className="flex flex-col">
          {children}
          <div className="flex justify-end">
            {mode === "UPCOMMING" && (
              <button
                className="mt-4 px-4 pt-2 rounded-none bg-transparent border-0 hover:bg-transparent hover:border-b text-white "
                onClick={onClose}
              >
                Close
              </button>
            )}
          </div>
        </div>
      </motion.dialog>
    </>,
    document.getElementById("portal")!
  );
}
