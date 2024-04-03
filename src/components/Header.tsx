import { ReactNode, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Modal from "./Modal";
import UpcommingItem from "./UpcommingItem";
import { useSessionsSelector } from "../store/hooks";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const upcommingSessions = useSessionsSelector(
    (state) => state.upcommingSessions.savedSessions
  );

  const activeStyle = "border-b-2";
  let modal: ReactNode;

  function toggleModalHandler() {
    setIsOpen((prevState) => !prevState);
  }

  function visitPageHandler(id: string) {
    navigate(`/sessions/${id}`);
    toggleModalHandler();
  }

  if (isOpen) {
    modal = (
      <Modal
        isOpen={isOpen}
        onClose={toggleModalHandler}
        title="Upcomming Sessions"
        mode="UPCOMMING"
      >
        <AnimatePresence>
          {upcommingSessions.length <= 0 && (
            <motion.p
              className="text-white text-lg font-light"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
            >
              You have no booked session at the moment
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {upcommingSessions.map((session) => (
            <UpcommingItem
              title={session.title}
              date={session.date}
              summary={session.summary}
              id={session.id}
              key={session.id}
              onClick={visitPageHandler}
            />
          ))}
        </AnimatePresence>
      </Modal>
    );
  }

  return (
    <header className="flex justify-between items-center">
      <AnimatePresence>{modal}</AnimatePresence>
      <NavLink to="sessions" end>
        <h1 className="font-bold text-5xl pb-1">Book a Session Manager</h1>
      </NavLink>
      <div className=" flex w-1/2 items-center justify-end ">
        <div className=" flex w-1/2 justify-evenly">
          <NavLink
            to="mission"
            className={({ isActive }) => (isActive ? activeStyle : "")}
            end
          >
            Our Mission
          </NavLink>
          <NavLink
            to="sessions"
            className={({ isActive }) => (isActive ? activeStyle : "")}
            end
          >
            Browse Sessions
          </NavLink>
        </div>

        <div className="flex justify-end ">
          <motion.button
            onClick={toggleModalHandler}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 600 }}
          >
            Upcomming Sessions
          </motion.button>
        </div>
      </div>
    </header>
  );
}
