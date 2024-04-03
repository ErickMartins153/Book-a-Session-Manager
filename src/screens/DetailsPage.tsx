import { useParams } from "react-router-dom";
import { useSessionsDispatch, useSessionsSelector } from "../store/hooks";
import { formatDate } from "../util/formatter";
import { type ReactNode, useState } from "react";
import Modal from "../components/Modal";
import Form from "../components/Form";
import Input from "../components/Input";
import { bookSession } from "../store/sessions-slice";
import { AnimatePresence, motion } from "framer-motion";

type Params = {
  id: string;
};

export default function DetailsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useSessionsDispatch();

  let modal: ReactNode;
  const { id } = useParams<Params>();
  const sessionDetails = useSessionsSelector((state) =>
    state.upcommingSessions.sessions.find((session) => session.id === id)
  );

  if (!sessionDetails) {
    return;
  }

  function bookSessionHandler() {
    dispatch(bookSession({ id: id! }));
    toggleModalHandler();
  }

  function toggleModalHandler() {
    setIsOpen((prevState) => !prevState);
  }

  if (isOpen) {
    modal = (
      <Modal
        isOpen
        title="Book Session"
        onClose={toggleModalHandler}
        mode="BOOK"
        onConfirm={bookSessionHandler}
      >
        <Form onClose={toggleModalHandler} onSubmit={bookSessionHandler}>
          <Input label="name" />
          <Input label="E-mail" />
        </Form>
      </Modal>
    );
  }
  const formattedDate = formatDate(sessionDetails.date);
  return (
    <motion.div
      className="flex flex-1 flex-col px-8 "
      initial={{ opacity: 0, y: 64 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence>{modal}</AnimatePresence>
      <div className="flex">
        <motion.div
          className="flex w-1/3 max-h-52 my-6 rounded-xl overflow-hidden shadow-xl"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={sessionDetails.image} alt={sessionDetails.summary} />
        </motion.div>
        <motion.div
          className="mx-6 my-8 flex flex-col justify-between"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col">
            <h2 className="text-3xl mb-4 font-bold text-white">
              {sessionDetails.title}
            </h2>
            <p>{formattedDate}</p>
            <p className="pt-6">
              Total duration: {sessionDetails.duration} Hour(s)
            </p>
          </div>
          <motion.button
            className="text-[#cacaca] font-semibold"
            onClick={toggleModalHandler}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 600 }}
          >
            Book Session
          </motion.button>
        </motion.div>
      </div>
      <div>
        <div className="flex flex-1  rounded-xl p-6 bg-[#383241] shadow-lg mb-8">
          <motion.p
            className=" whitespace-pre-line text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {sessionDetails.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
