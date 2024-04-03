import { motion } from "framer-motion";
import { FormEvent, type ReactNode } from "react";

type FormProps = {
  children: ReactNode;
  onClose: () => void;
  onSubmit: () => void;
};

export default function Form({ children, onClose, onSubmit }: FormProps) {
  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
    console.log("yo");
  }

  return (
    <form onSubmit={submitHandler}>
      {children}
      <div className="flex justify-end">
        <button
          type="button"
          className="mt-4 px-4 pt-2 rounded-none bg-transparent border-0 hover:bg-transparent hover:border-b text-white "
          onClick={onClose}
        >
          Close
        </button>
        <motion.button
          className="mt-4 ml-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 600 }}
          type="submit"
        >
          Book Session
        </motion.button>
      </div>
    </form>
  );
}
